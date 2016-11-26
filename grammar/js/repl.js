const readline = require('readline');
var processTree = require('/Users/supriyag/workspace/jison/grammar/js/assignment3.js').process;
var lookupTable = require('../js/lookupTable');
var Parser = require('jison').Parser;
var fs = require('fs');
var grammar = fs.readFileSync('./grammar/lex/assignment3.jison','utf-8');
var parser = new Parser(grammar);
var identifierStorage = new lookupTable();

var main = function (expression) {
    var trees = parser.parse(expression);
    return processTree(trees,identifierStorage);
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
});

rl.prompt();

rl.on('line', function (line) {
    console.log(main(line));
    rl.prompt();
}).on('close', function () {
    rl.write('(To exit, press ^C again or type .exit)');
});


