var OperatorNode = function (nodeValue) {
    this.value = nodeValue;
    this.type = 'operator';
    this.evaluate = evaluate;
};

var evaluate = function () {
    return function (val1,val2) {
        return val1 + val2;
    }
};

module.exports = OperatorNode;