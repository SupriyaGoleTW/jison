var assert = require('assert');
var NumberNode = require('../../grammar/nodes/NumberNode');
var AssignmentNode = require('../../grammar/nodes/AssignmentNode');
var OperatorNode = require('../../grammar/nodes/OperatorNode');
var IdentifierNode = require('../../grammar/nodes/IdentifierNode');
var Tree = require('../../grammar/nodes/Tree');
var LookupTable = require('../../grammar/js/lookupTable');

describe('Evaluate Assignment Expression', function () {
    var val1, val2, plus, minus;

    beforeEach(function () {
        val1 = new NumberNode('10');
        val2 = new NumberNode('20');
        plus = new OperatorNode('+');
        minus = new OperatorNode('-');
    });

    it('should perform expected operation on corresponding children', function () {
        var identifierStorage = new LookupTable();
        var result = plus.evaluateNodes(identifierStorage,[val1,val2]);
        assert.equal(result,30);
        result = minus.evaluateNodes(identifierStorage,[val1,val2]);
        assert.equal(result,-10);
    });

    it('should perform expected operation on children which are tree', function () {
        var identifierStorage = new LookupTable();
        var tree = new Tree(plus,[val1,val2]);
        var result = plus.evaluateNodes(identifierStorage,[tree,val2]);
        assert.equal(result,50);
    });

    it('should return equivalent js code', function () {
        assert.equal(plus.toJS(new LookupTable(),[val1,val2]),'(10 + 20)');
    });

    it('should return NAN when added with identifier whose value is undefined',function () {
        var identifierNode = new IdentifierNode('x');
        var lookupTable = new LookupTable();
        lookupTable.addToMap('x');
        assert.equal(plus.evaluateNodes(lookupTable,[identifierNode,val1]).toString(),'NaN');
    });
});


