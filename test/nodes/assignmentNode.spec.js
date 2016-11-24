var assert = require('assert');
var NumberNode = require('../../grammar/nodes/NumberNode');
var AssignmentNode = require('../../grammar/nodes/AssignmentNode');
var IdentifierNode = require('../../grammar/nodes/IdentifierNode');
var LookupTable = require('../../grammar/js/lookupTable');
var Tree = require('../../grammar/nodes/Tree');

describe('Assignment Node', function () {
    describe('Evaluate Assignment Expression', function () {
        var identifier, value, equalTo;

        beforeEach(function () {
            value = new NumberNode('20');
            identifier = new IdentifierNode('x');
            equalTo = new AssignmentNode('=');
        });

        it('should add variable value into map in case of assignment expression', function () {
            var identifierStorage = new LookupTable();
            var result = equalTo.evaluateNodes(identifierStorage, [identifier, value]);
            assert.equal(result, 20);
            assert.equal(identifierStorage.getIdentifierValue('x'), 20);
        });

    });

    describe('to JS', function () {
        it('should convert assignment expression to equivalent js code', function () {
            var assignmentNode = new AssignmentNode('=');
            var val1 = new NumberNode(10);
            var identifier = new IdentifierNode('x');
            var result = assignmentNode.toJS(new LookupTable(), [identifier, val1]);
            assert.equal(result, 'var x = 10');
        });

        it('should not add "var" when identifier is already declared', function () {
            var lookupTable = new LookupTable();
            lookupTable.addToMap('x', 5);
            var val1 = new NumberNode(10);
            var identifier = new IdentifierNode('x');
            var assignmentNode = new AssignmentNode('=');
            assert.equal(assignmentNode.toJS(lookupTable, [identifier, val1]), 'x = 10');
        });
    });
});

