var Parser = require("jison").Parser;

var grammar = {
    "lex": {
        rules: [
            ["[(]", "return '(';"],
            ["[)]", "return ')';"]
        ]
    },

    bnf: {
        "C" :["( C ) C", '']

    }
};

var parser = new Parser(grammar);
parser.generate();

console.log(parser.parse("()"));