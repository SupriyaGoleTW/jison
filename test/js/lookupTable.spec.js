var assert = require('assert');
var LookupTable = require('../../grammar/js/lookupTable');

describe('Lookup Table', function () {
    var lookupTable;
    beforeEach(function () {
        lookupTable = new LookupTable();
    });
    
    it('should add variable value into storage', function () {
        lookupTable.addToMap('x', 5);
        var xValue = lookupTable.getIdentifierValue('x');
        assert.equal(xValue, 5);
    });

    it('should not throw an error when value of identifier is zero',function () {
        lookupTable.addToMap('x', 0);
        assert.equal(lookupTable.getIdentifierValue('x'), 0);
    });

    it('should throw an error when look for an identifier which is absent in lookup table', function () {
        assert.throws(function () {
            lookupTable.getIdentifierValue('x')
        },/x is not defined/);
    });
});