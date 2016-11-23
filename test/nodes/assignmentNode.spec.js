var assert = require('assert');
var NumberNode = require('../../grammar/nodes/NumberNode');
var AssignmentNode = require('../../grammar/nodes/AssignmentNode');
var IdentifierNode = require('../../grammar/nodes/IdentifierNode');
var lookupTable = require('../../grammar/js/lookupTable');

describe('Evaluate Assignment Expression', function () {
    var val1, val2, equalTo;

    beforeEach(function () {
        val2 = new NumberNode('20');
        val1 = new IdentifierNode('x');
        equalTo = new AssignmentNode('=');
    });

    it('should add variable value into map in case of assignment expression', function () {
        var identifierStorage = new lookupTable();
        var result = equalTo.evaluateNodes(identifierStorage, [val1, val2]);
        assert.equal(result, 20);
        assert.equal(identifierStorage.getIdentifierValue('x'),20);
    });
});

