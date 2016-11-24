var assert = require('assert');
var fs = require('fs');
var Parser = require('jison').Parser;
var actions = require('../../grammar/js/assignment3');
var LookupTable = require('../../grammar/js/lookupTable');

describe('Grammar', function () {
    var parser, lookupTable;
    beforeEach(function () {
        lookupTable = new LookupTable();
        var grammar = fs.readFileSync('./grammar/lex/assignment3.jison', 'utf-8');
        parser = new Parser(grammar);
        parser.generate();
    });

    it('should evaluate basic arithmetic expression', function () {
        var trees = parser.parse('1+2+3+4;');
        var result = actions.process(trees, lookupTable);
        assert.equal(result, 10);
    });

    it('should evaluate expression with multiple operators', function () {
        var trees = parser.parse('1+2+3*4;');
        var result = actions.process(trees, lookupTable);
        assert.equal(result, 15);
    });

    it('should evaluate expression which contains variables', function () {
        var trees = parser.parse('x=10;x+2;');
        var result = actions.process(trees, lookupTable);
        assert.equal(result, 12);
    });

    it('should evaluate expression which contains variables', function () {
        var trees = parser.parse('x=10;y=x+2;y;');
        var result = actions.process(trees, lookupTable);
        assert.equal(result, 12);
    });

    it('should evaluate expression with brackets', function () {
        var trees = parser.parse('x=10;y=20;z=30;(x^2)+(y^2)-(z^2);');
        var result = actions.process(trees, lookupTable);
        assert.equal(result, -400);
    });

    it('should evaluate simple factorial expression', function () {
        var trees = parser.parse('x=5;x!;');
        var result = actions.process(trees, lookupTable);
        assert.equal(result, 120);
    });

    it('should evaluate complex factorial expression', function () {
        var trees = parser.parse('x=5;y=x+2;x!*y!;');
        var result = actions.process(trees, lookupTable);
        assert.equal(result, 604800);
    });

    it('should evaluate complex exponent expression with assignment', function () {
        var trees = parser.parse('x=2;x=2^5;x;');
        var result = actions.process(trees, lookupTable);
        assert.equal(result, 32);
    });

    it('should throw an error when accessed a variable which is not defined', function () {
        var trees = parser.parse('x + 2;');
        assert.throws(function () {
            actions.process(trees, lookupTable);
        }, Error);
    });
});