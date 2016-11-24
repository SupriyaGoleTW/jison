var AssignmentNode = function (nodeValue) {
    this.value = nodeValue;
    this.type = 'assignment';
    this.evaluateNodes = evaluate;
    this.toJS = toJS;
};

var evaluate = function (lookupTable, childNodes) {
    var result = childNodes[1].evaluateNodes(lookupTable);
    lookupTable.addToMap(childNodes[0].value, result);
    return result;
};

var toJS = function (lookupTable, childNodes) {
    return [childNodes[0].toJS(lookupTable), this.value, childNodes[1].toJS(lookupTable)].join(' ');
};

module.exports = AssignmentNode;