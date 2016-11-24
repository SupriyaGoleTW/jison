var assert = require('assert');
var actions = require('../../grammar/js/assignment3');
var NumberNode = require('../../grammar/nodes/NumberNode');
var OperatorNode = require('../../grammar/nodes/OperatorNode');
var IdentifierNode = require('../../grammar/nodes/IdentifierNode');
var AssignmentNode = require('../../grammar/nodes/AssignmentNode');
var ExponentNode = require('../../grammar/nodes/ExponentNode');
var Tree = require('../../grammar/nodes/Tree');
var LookupTable = require('../../grammar/js/lookupTable');

describe('Tree Processor', function () {
    var val1, val2, plus, minus, equalTo, xIdentifier, yIdentifier, exponent;
    beforeEach(function () {
        val1 = new NumberNode('1');
        val2 = new NumberNode('2');
        plus = new OperatorNode('+');
        minus = new OperatorNode('-');
        equalTo = new AssignmentNode('=');
        exponent = new ExponentNode('^');
        xIdentifier = new IdentifierNode('x');
        yIdentifier = new IdentifierNode('y');
    });

    it('should process the tree for basic value substitution', function () {
        //x = 1+2;x;
        var trees = [];
        var tree = new Tree(plus, [val1, val2]);
        trees.push(tree);
        trees.push(new Tree(equalTo, [xIdentifier, tree]));
        trees.push(new Tree(xIdentifier));

        var identifierStorage = new LookupTable();
        assert.equal(actions.process(trees, identifierStorage), 3);
    });

    it('should evaluate expression with brackets', function () {
        var val1 = new NumberNode(5);
        var val2 = new NumberNode(2);
        var val3 = new NumberNode(5);
        var tree = new Tree(exponent, [val1, val2]);
        assert.equal(tree.evaluateNodes(), 25);
        tree = new Tree(exponent, [val1, val3]);
        assert.equal(tree.evaluateNodes(), 3125);
    });

    it('should process tree where multiple identifier value is present', function () {
        //x=1+2;y=x+2;y;
        var trees = [];
        var xExprTree = new Tree(plus, [val1, val2]);

        trees.push(xExprTree);
        trees.push(new Tree(equalTo, [xIdentifier, xExprTree]));

        var yExprTree = new Tree(plus, [xIdentifier, val2]);
        trees.push(yExprTree);
        trees.push(new Tree(equalTo, [yIdentifier, yExprTree]));
        trees.push(new Tree(yIdentifier));

        var identifierStorage = new LookupTable();
        assert.equal(actions.process(trees, identifierStorage), 5);

        //x = 1-2;y = x+2;y;
        trees.shift();
        trees.shift();

        xExprTree = new Tree(minus, [val1, val2]);
        trees.unshift(new Tree(equalTo, [xIdentifier, xExprTree]));
        trees.unshift(xExprTree);
        assert.equal(actions.process(trees, identifierStorage), 1);
    });

    it('should generate equivalent js code for expression with semi-colon at the end of it ', function () {
        var tree = new Tree(equalTo, [xIdentifier, val1]);
        var lookupTable = new LookupTable();
        assert.equal(actions.toJS([tree], lookupTable), 'var x = 1;');
    });

    it('should generate equivalent js code for complex expression with brackets if needed', function () {
        var tree = new Tree(equalTo, [xIdentifier, new Tree(plus, [val1, val2])]);
        var lookupTable = new LookupTable();
        assert.equal(actions.toJS([tree], lookupTable), 'var x = (1 + 2);');
    });

    it('should generate equivalent js code for complex expression and console.log when needed', function () {
        var tree = new Tree(equalTo, [xIdentifier, val1]);
        var lookupTable = new LookupTable();
        assert.equal(actions.toJS([tree], lookupTable), 'var x = 1;');
        var tree2 = new Tree(plus, [xIdentifier, val2]);
        assert.equal(actions.toJS([tree2], lookupTable), 'console.log((x + 2));');
    });
});