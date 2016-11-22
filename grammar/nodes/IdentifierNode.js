var identifierMapping = require('../js/assignment3').identifierMapping;

var IdentifierNode = function (nodeValue) {
    this.value = nodeValue;
    this.type = 'identifier';
    this.evaluateNodes = evaluate;
};

var evaluate = function () {
    return identifierMapping[this.value].evaluateNodes();
};




module.exports = IdentifierNode;
