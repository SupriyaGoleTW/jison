var PowerNode = function (nodeValue) {
    this.value = nodeValue;
    this.type = 'exponent';
    this.evaluateNodes = evaluate;
};

var evaluate = function (lookupTable,childNodes) {
    return Math.pow(childNodes[0].evaluateNodes(lookupTable),childNodes[1].evaluateNodes(lookupTable));
};

module.exports = PowerNode;

