var assert = require('assert');
var Factorial = require('../../grammar/nodes/FactorialNode');
var NumberNode = require('../../grammar/nodes/NumberNode');
var lookupTable = require('../../grammar/js/lookupTable');

describe('Factorial', function () {
    var val1, val2, factorial;
    beforeEach(function () {
        val1 = new NumberNode('5');
        val2 = new NumberNode('4');
        factorial = new Factorial('!');
    });

    it('should evaluate exponent value',function () {
        var result = factorial.evaluateNodes(new lookupTable(),[val1]);
        assert.equal(result,120);
    });
});

