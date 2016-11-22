var Tree = function (parentNode, childNode) {
    this.parentNode = parentNode;
    this.childNode = childNode;
    this.evaluateNodes = evaluate;
};

var evaluate = function () {
    if(this.parentNode.value !== '=') {
        var leftChild = this.childNode[0].evaluateNodes(this.childNode[0]);
        var rightChild = this.childNode[1].evaluateNodes(this.childNode[1]);
        return this.parentNode.evaluateNodes(leftChild, rightChild);
    }
};

module.exports = Tree;