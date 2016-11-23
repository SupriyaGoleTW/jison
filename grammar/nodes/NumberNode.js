var NumberNode = function (nodeValue) {
    this.value = Number(nodeValue);
    this.type = 'number';
    this.evaluateNodes = evaluate;
};

var evaluate = function () {
  return this.value;
};

module.exports = NumberNode;
