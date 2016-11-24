var assert = require('assert');
var NumberNode = require('../../grammar/nodes/NumberNode');
var OperatorNode = require('../../grammar/nodes/OperatorNode');
var AssignmentNode = require('../../grammar/nodes/AssignmentNode');
var IdentifierNode = require('../../grammar/nodes/IdentifierNode');
var Tree = require('../../grammar/nodes/Tree');
var lookupTable = require('../../grammar/js/lookupTable');

describe('Evaluate Tree', function () {
    var val1,val2,plus;

    beforeEach(function () {
        val1 = new NumberNode('10');
        val2 = new NumberNode('20');
        plus = new OperatorNode('+');
    });
    
    it('should evaluate a tree which has only two children',function () {
        var tree = new Tree(plus,[val1,val2]);
        assert.equal(tree.evaluateNodes(new lookupTable()),30);
    });

    it('should return equivalent js code for assignment expression',function () {
        var identifier = new IdentifierNode('x');
        var assignmentNode = new AssignmentNode('=');
        var tree = new Tree(assignmentNode,[identifier,val1]);
        assert.equal(tree.toJS(new lookupTable()),'var x = 10');
    });

    it('should return equivalent js code for complex assignment expression',function () {
        var identifier = new IdentifierNode('x');
        var assignmentNode = new AssignmentNode('=');
        var additionTree = new Tree(plus,[val1,val2]);
        var tree = new Tree(assignmentNode,[identifier,additionTree]);
        assert.equal(tree.toJS(new lookupTable()),'var x = (10 + 20)');
    });

    it('should return equivalent js code for complex assignment expression with ' +
        'appropriate parenthesis',function () {
        var multiplyNode = new OperatorNode('*');

        var identifier = new IdentifierNode('x');
        var assignmentNode = new AssignmentNode('=');
        var multiply = new Tree(multiplyNode,[val1,val2]);

        var addition = new Tree(plus,[new NumberNode(30),multiply]);

        var tree = new Tree(assignmentNode,[identifier,addition]);

        assert.equal(tree.toJS(new lookupTable()),'var x = (30 + (10 * 20))');
    });
});
