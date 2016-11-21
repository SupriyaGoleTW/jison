var NumberNode = function (nodeValue) {
    this.value = nodeValue;
    this.type = 'number';
    this.evaluate = evaluate;
};

var evaluate = function (value) {
  return value;
};

module.exports = NumberNode;
