var PowerNode = function (nodeValue) {
    this.value = nodeValue;
    this.type = 'exponent';
    this.evaluateNodes = evaluate;
    this.toJS = toJS;
};

var evaluate = function (lookupTable,childNodes) {
    return Math.pow(childNodes[0].evaluateNodes(lookupTable),childNodes[1].evaluateNodes(lookupTable));
};

var toJS = function (childNodes,lookupTable) {
    return '(' + childNodes[0].toJS() + ' '+this.value + ' '+childNodes[1].toJS() + ')';
};

module.exports = PowerNode;

