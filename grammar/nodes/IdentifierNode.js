var IdentifierNode = function (nodeValue) {
    this.value = nodeValue;
    this.type = 'identifier';
    this.evaluateNodes = evaluate;
};

var evaluate = function (lookupTable, childNodes) {
    return lookupTable.identifierMapping[this.value];
};




module.exports = IdentifierNode;
