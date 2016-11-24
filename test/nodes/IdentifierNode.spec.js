var assert = require('assert');
var NumberNode = require('../../grammar/nodes/NumberNode');
var IdentifierNode = require('../../grammar/nodes/IdentifierNode');
var LookupTable = require('../../grammar/js/lookupTable');

describe('Identifier Node', function () {
    it('should convert identifier into equivalent js code', function () {
        var identifier = new IdentifierNode('x');
        assert.equal(identifier.toJS(new LookupTable()),'var x');
    });
    
    it('should not add "var" as a prefix to identifier when it is already declared',function () {
        var lookupTable = new LookupTable();
        lookupTable.addToMap('x',10);
        var identifierNode = new IdentifierNode('x');
        assert.equal(identifierNode.toJS(lookupTable),'x');
    })
});


