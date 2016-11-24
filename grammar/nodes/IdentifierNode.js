var IdentifierNode = function (nodeValue) {
    this.value = nodeValue;
    this.type = 'identifier';
    this.evaluateNodes = evaluate;
    this.toJS = toJS;
};

var evaluate = function (lookupTable, childNodes) {
    return lookupTable.getIdentifierValue(this.value);
};

var toJS = function (lookupTable) {
    if (lookupTable.has(this.value))
        return this.value;
    return 'var ' + this.value;
};

module.exports = IdentifierNode;
