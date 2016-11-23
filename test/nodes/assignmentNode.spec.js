var assert = require('assert');
var NumberNode = require('../../grammar/nodes/NumberNode');
var AssignmentNode = require('../../grammar/nodes/AssignmentNode');
var IdentifierNode = require('../../grammar/nodes/IdentifierNode');
var lookupTable = require('../../grammar/js/lookupTable');

describe('Evaluate Assignment Expression', function () {
    var identifier, value, equalTo;

    beforeEach(function () {
        value = new NumberNode('20');
        identifier = new IdentifierNode('x');
        equalTo = new AssignmentNode('=');
    });

    it('should add variable value into map in case of assignment expression', function () {
        var identifierStorage = new lookupTable();
        var result = equalTo.evaluateNodes(identifierStorage, [identifier, value]);
        assert.equal(result, 20);
        assert.equal(identifierStorage.getIdentifierValue('x'), 20);
    });

    it('should throw an error if assignment expression syntax is incorrect', function () {
        var identifierStorage = new lookupTable();
        assert.throws(function () {
            equalTo.evaluateNodes(identifierStorage, [value, identifier])
        }, Error);
    });

});

