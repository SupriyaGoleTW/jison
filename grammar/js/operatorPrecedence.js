var toWordConvertor = require('number-to-words');

var replace = function(text, regex, replaceWith){
    return text.replace(regex,replaceWith);
};

var expressionRepresenter = function(listOfExpressions){
    var expression = JSON.stringify(listOfExpressions);
    expression = replace(expression,/\[/g,'( ');
    expression = replace(expression,/]/g,' )');
    expression = replace(expression,/,|"/g,' ');
    return toWords(expression).join(' ');
};

var toWords = function (expression){
    var operators = {'+':'plus','*':'times','(':'(',')':')'}

    var dividedExpression = expression.split(' ');
    var wordedExpr = dividedExpression.map(function (token) {
        if(isNaN(token)){
            return operators[token];
        }
        if(token=='')
            return;
        return toWordConvertor.toWords(token);
    });
    return wordedExpr;
};


exports.expressionRepresenter = expressionRepresenter;