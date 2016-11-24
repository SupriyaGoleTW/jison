var assert = require('assert');
var Exponent = require('../../grammar/nodes/ExponentNode');
var NumberNode = require('../../grammar/nodes/NumberNode');
var LookupTable = require('../../grammar/js/lookupTable');

describe('Exponent', function () {
    var val1, val2, exponent;
    beforeEach(function () {
        val1 = new NumberNode('2');
        val2 = new NumberNode('3');
        exponent = new Exponent('^');
    });

    it('should evaluate exponent value',function () {
        var result = exponent.evaluateNodes(new LookupTable(),[val1,val2]);
        assert.equal(result,8);
    });

    it('should generate equivalent js code for exponent expression', function () {
        assert.equal(exponent.toJS([val1,val2],new LookupTable()),'(2 ^ 3)');
    });
});
