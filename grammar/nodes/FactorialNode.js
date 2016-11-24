var FactorialNode = function (nodeValue) {
    this.value = nodeValue;
    this.type = 'factorial';
    this.evaluateNodes = evaluate;
    this.toJS = toJS;
};

var evaluate = function (lookupTable, childNodes) {
    var fact = eval('('+factorial+')');
    return fact(childNodes[0].evaluateNodes(lookupTable));
};

var toJS = function (lookupTable, childNodes) {
    if(lookupTable.has('factorial')){
        return 'factorial('
            + childNodes[0].toJS(lookupTable) + ')';
    }
    lookupTable.addToMap('factorial',factorial.toString());
    return factorial.toString() + ';\nfactorial('
        + childNodes[0].toJS(lookupTable) + ')';
};

var factorial = 'function factorial(num) {'
    + 'return num <= 0 ? 1 : (num * factorial(num - 1));'
    + '}';

module.exports = FactorialNode;
