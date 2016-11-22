var process = function (expression) {
    return expression.evaluateNodes(expression);
};

module.exports = process;
