var FactorialNode = function (nodeValue) {
    this.value = nodeValue;
    this.type = 'factorial';
    this.evaluateNodes = evaluate;
};

var evaluate = function (lookupTable, childNodes) {
    return factorial(childNodes[0].evaluateNodes(lookupTable));
};

var factorial = function (num, result) {
    var result = result ? result : 1;
    if (num == 1) {
        return result;
    } else {
        result = num * factorial(num - 1, result);
    }
    return result;
};

module.exports = FactorialNode;


