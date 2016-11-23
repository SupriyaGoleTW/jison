var assert = require('assert');
var lookupTable = require('../../grammar/js/lookupTable');

describe('Lookup Table', function () {
    it('should add variable value into storage', function () {
        var identifierStorage = new lookupTable();
        identifierStorage.addToMap('x', 5);
        var xValue = identifierStorage.getIdentifierValue('x');
        var zValue = identifierStorage.getIdentifierValue('z');
        assert.equal(xValue, 5);
        assert.equal(zValue, undefined);
    });
});