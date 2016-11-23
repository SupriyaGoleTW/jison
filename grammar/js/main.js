var processTree = require('/Users/supriyag/workspace/jison/grammar/js/assignment3.js');
var lookupTable = require('../js/lookupTable');
var Parser = require('jison').Parser;
var fs = require('fs');

var main = function (expression) {
    var grammar = fs.readFileSync('./grammar/lex/assignment3.jison','utf-8');
    var parser = new Parser(grammar);
    var trees = parser.parse(expression);
    return processTree(trees,lookupTable);
};

var text = fs.readFileSync(process.argv[2],'utf-8');
console.log(main(text));
