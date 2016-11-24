var Tree = function (parentNode, childNodes) {
    this.parentNode = parentNode;
    this.childNodes = childNodes;
    this.evaluateNodes = evaluate;
    this.toJS = toJS;
};

var evaluate = function (lookupTable) {
    return this.parentNode.evaluateNodes(lookupTable, this.childNodes);
};

var toJS = function (lookupTable) {
    return this.parentNode.toJS(lookupTable, this.childNodes);
};

module.exports = Tree;