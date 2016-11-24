var assert = require('assert');
var Factorial = require('../../grammar/nodes/FactorialNode');
var NumberNode = require('../../grammar/nodes/NumberNode');
var LookupTable = require('../../grammar/js/lookupTable');

describe('Factorial', function () {
    var val1, val2, factorial;
    beforeEach(function () {
        val1 = new NumberNode('5');
        val2 = new NumberNode('4');
        factorial = new Factorial('!');
    });

    it('should evaluate exponent value', function () {
        var result = factorial.evaluateNodes(new LookupTable(), [val1]);
        assert.equal(result, 120);
    });

    it('should generate equivalent js code for assignment expression', function () {
        var expected = 'function factorial(num) {return num <= 0 ? 1 :' +
            ' (num * factorial(num - 1));};\nfactorial(5)';

        assert.equal(factorial.toJS(new LookupTable(), [val1]), expected);
    });

    it('should evaluate fact function at first and later should call with function name', function () {
        var expected = 'function factorial(num) {return num <= 0 ? 1 :' +
            ' (num * factorial(num - 1));};\nfactorial(5)';

        var lookupTable = new LookupTable();
        assert.equal(factorial.toJS(lookupTable, [val1]), expected);
        assert.equal(factorial.toJS(lookupTable, [val2]), 'factorial(4)');
    });
});