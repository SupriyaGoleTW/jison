var assert = require('assert');
var NumberNode = require('../../grammar/nodes/NumberNode');
var OperatorNode = require('../../grammar/nodes/OperatorNode');
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
});
