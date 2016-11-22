var OperatorNode = function (nodeValue) {
    this.value = nodeValue;
    this.type = 'operator';
    this.evaluateNodes = evaluate;
};

var evaluate = function (val1, val2) {
    return eval(val1 + this.value + val2);
};

module.exports = OperatorNode;