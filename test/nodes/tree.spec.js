var assert = require('assert');
var NumberNode = require('../../grammar/nodes/NumberNode');
var OperatorNode = require('../../grammar/nodes/OperatorNode');
var IdentifierNode = require('../../grammar/nodes/IdentifierNode');
var processor = require('../../grammar/js/assignment3');
var Tree = require('../../grammar/nodes/Tree');

describe('Evaluate Tree', function () {
    var tree,complexTree, valueSubstitutorTree;
    beforeEach(function () {
        var val1 = new NumberNode('10');
        var val2 = new NumberNode('20');
        var plus = new OperatorNode('+');
        //tree with only 2 number nodes as child 10+20
        tree = new Tree(plus, [val1, val2]);
        //tree with only 2 number nodes as child 10+20+30
        complexTree = new Tree(plus,[tree,val2]);

        //x = 10; x+20 variable value substitution tree
        var x = new IdentifierNode('x');
        processor.addToMap(x,val1);
        var assignmentOp = new OperatorNode('=');

        new Tree(assignmentOp,[x,val1]);
        valueSubstitutorTree = new Tree(plus,[x,val2]);
        //x = 10; y = x+2; y;  
        
    });
    
    it('should evaluate a tree which has only two children',function () {
        var evaluatedResult = tree.evaluateNodes();
        assert.equal(evaluatedResult,30);
    });

    it('should evaluate a complex tree',function () {
        var evaluatedResult = complexTree.evaluateNodes();
        assert.equal(evaluatedResult,50);
    });

    it('should evaluate expressions',function () {
        var evaluatedResult = valueSubstitutorTree.evaluateNodes();
        assert.equal(evaluatedResult,30);
    });
});
