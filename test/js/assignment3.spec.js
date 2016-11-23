var assert = require('assert');
var processTree = require('../../grammar/js/assignment3');
var NumberNode = require('../../grammar/nodes/NumberNode');
var OperatorNode = require('../../grammar/nodes/OperatorNode');
var Tree = require('../../grammar/nodes/Tree');

describe.only('Tree Processor', function () {
    var tree, val1, val2;
    beforeEach(function () {
        val1 = new NumberNode('10');
        val2 = new NumberNode('20');
        var plus = new OperatorNode('+');
        tree = new Tree(plus, [val1, val2]);
    });

    it('should generate a tree once it founds block of expression', function () {
        assert.equal(tree.childNodes.length, 2);
        assert.equal(tree.parentNode.value, '+');
        assert.ok(tree instanceof Tree);
    });

    it('should process the tree', function () {
        assert.equal(processTree([tree],{}), 30);
    });
});