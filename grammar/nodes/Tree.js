var Tree = function (parentNode, childNode) {
    this.parentNode = parentNode;
    this.childNode = childNode;
    this.evaluateNodes = evaluate;
};

var evaluate = function (allNodes) {
    var leftChild = allNodes.childNode[0].evaluateNodes(allNodes.childNode[0]);
    var rightChild = allNodes.childNode[1].evaluateNodes(allNodes.childNode[1]);
    return allNodes.parentNode.evaluateNodes(leftChild, rightChild);
};

module.exports = Tree;

// var getAllNodesValue = function (nodes) {
//     return nodes.map(function (node) {
//         return node.value;
//     })
// };
//
// var addParenthesis = function (processedSubTree) {
//     return processedSubTree.reduce(function (prevResult, next) {
//             console.log('next is :', next);
//             if (next instanceof Array) {
//                 prevResult += '(';
//                 prevResult += getAllNodesValue(next).join(' ') + ')';
//                 return prevResult;
//             } else if (next.value instanceof Array && next.type == 'tree') {
//                 console.log('the result is: ', prevResult);
//                 prevResult += '(';
//                 prevResult += processedSubTree(next).join(' ') + ')';
//                 console.log('the result is: ', prevResult);
//                 return prevResult;
//             }
//             return prevResult + next;
//         }, '(') + ')';
// };
//
// var processSubTree = function (allNodes) {
//     var x = allNodes.map(function (node) {
//         if (node.value == 'tree')
//             return getAllNodesValue(node);
//         return node.value;
//     });
//     console.log('result', x);
// };
//
// var getSubTree = function (childNode) {
//     if (childNode.hasOwnProperty('parentNode')) {
//         return {hasSubTree: true, childNode: childNode.parentNode};
//     }
//     return {hasSubTree: false,childNode:childNode};
// };
