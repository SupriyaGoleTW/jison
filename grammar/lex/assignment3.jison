%lex

%%
\s+         {/* skip whitespace */}
[0-9]+      {return 'NUM';}
"+"         {return '+';}
"*"         {return '*';}
"="         {return '=';}
"-"         {return '-';}
"^"         {return '^';}
"!"         {return '!';}
"("         {return '(';}
")"         {return ')';}
[a-zA-Z]+   {return 'IDENTIFIER';}
";"         {return 'TERMINATOR';}
<<EOF>>     {return 'EOF'}

/lex

%{
    var path = require('path');
    var processTree = require(path.resolve('./grammar/js/assignment3.js'));
    var NumberNode = require(path.resolve('./grammar/nodes/NumberNode.js'));
    var AssignmentNode = require(path.resolve('./grammar/nodes/AssignmentNode.js'));
    var IdentifierNode = require(path.resolve('./grammar/nodes/IdentifierNode.js'));
    var ExponentNode = require(path.resolve('./grammar/nodes/ExponentNode.js'));
    var FactorialNode = require(path.resolve('./grammar/nodes/FactorialNode.js'));
    var Tree = require(path.resolve('./grammar/nodes/Tree.js'));
    var OperatorNode = require(path.resolve('./grammar/nodes/OperatorNode.js'));
    var trees = [];
%}

/* operator associations and precedence */

%left '='
%left '+' '-'
%left '*'
%left 'TERMINATOR'
%left '!'
%left '^'

%start expressions
%%

expressions
    : block
    | expressions block
    | expressions EOF
        {return trees};

E
    : assignment_expression

    | E '+' E
        {
            $$ = new Tree(new OperatorNode($2), [$1, $3]);
        }

    | E '-' E
        {
            $$ = new Tree(new OperatorNode($2), [$1, $3]);
        }

    | E '*' E
        {$$ = new Tree(new OperatorNode($2), [$1, $3]);}

    | E '!'
        {$$ = new Tree(new FactorialNode($2), [$1]);}

    | E '^' E
        {;$$ = new Tree(new ExponentNode($2), [$1, $3]);}

    | NUM
        {$$ = new NumberNode($1);}

    | identifier

    | '(' E ')'
        {
            $$=$2;
        }
    ;

assignment_expression :
    identifier '=' E
        {
            $$ = new Tree(new AssignmentNode($2),[$1,$3]);
        };

identifier :
    IDENTIFIER
        {$$ = new IdentifierNode($1);}
    ;

block : E TERMINATOR
        {
          trees.push($$);
        }
      ;
