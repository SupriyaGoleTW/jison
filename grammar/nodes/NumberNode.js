var NumberNode = function (nodeValue) {
    this.value = Number(nodeValue);
    this.type = 'number';
    this.evaluateNodes = evaluate;
    this.toJS = toJS;
};

var evaluate = function () {
  return this.value;
};

var toJS = function () {
  return this.value;  
};

module.exports = NumberNode;
