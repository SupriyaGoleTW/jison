var OperatorNode = function (nodeValue) {
    this.value = nodeValue;
    this.type = 'operator';
    this.evaluateNodes = evaluate;
    this.toJS = toJS;

};

var evaluate = function (lookupTable, childNodes) {
    return eval(childNodes[0].evaluateNodes(lookupTable) + this.value + childNodes[1].evaluateNodes(lookupTable));
};

var toJS = function (lookupTable, childNodes) {
    return '(' + [childNodes[0].toJS(lookupTable), this.value,
            childNodes[1].toJS(lookupTable)].join(' ')
            + ')';
};

module.exports = OperatorNode;