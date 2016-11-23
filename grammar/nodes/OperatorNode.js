var OperatorNode = function (nodeValue) {
    this.value = nodeValue;
    this.type = 'operator';
    this.evaluateNodes = evaluate;
};

var evaluate = function (lookupTable,childNodes) {
    return eval(childNodes[0].evaluateNodes(lookupTable) + this.value + childNodes[1].evaluateNodes(lookupTable));
};

module.exports = OperatorNode;