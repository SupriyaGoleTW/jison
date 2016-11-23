var AssignmentNode = function (nodeValue) {
    this.value = nodeValue;
    this.type = 'assignment';
    this.evaluateNodes = evaluate;
};

var evaluate = function (lookupTable, childNodes) {
    var result = childNodes[1].evaluateNodes(lookupTable);
    lookupTable.addToMap(childNodes[0].value,result);
    return result;
};

module.exports = AssignmentNode;