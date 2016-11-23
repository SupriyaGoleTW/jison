var AssignmentNode = function (nodeValue) {
    this.value = nodeValue;
    this.type = 'assignment';
    this.evaluateNodes = evaluate;
};

var evaluate = function (lookupTable, childNodes) { //todo note do we need to do this check or jison error msg is more than enough
    if(childNodes[0].type !== 'identifier')
        throw new Error('Syntax Error! Variable name expected.');
    
    var result = childNodes[1].evaluateNodes(lookupTable);
    lookupTable.addToMap(childNodes[0].value,result);
    return result;
};

module.exports = AssignmentNode;