var Tree = function (parentNode, childNodes) {
    this.parentNode = parentNode;
    this.childNodes = childNodes;
    this.evaluateNodes = evaluate;
};

var evaluate = function (lookupTable) {
    return this.parentNode.evaluateNodes(lookupTable,this.childNodes);
};

module.exports = Tree;