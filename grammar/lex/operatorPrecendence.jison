%lex

%%
\s+         {/* skip whitespace */}
[0-9]+      {return 'NAT';}
"+"         {return '+';}
"*"         {return '*';}
[a-zA-z]    {return 'identifier';}
<<EOF>>     {return 'EOF'}

/lex

%{
    var processTree = require('./grammar/js/assignment3.js');
    var NumberNode = require('./grammar/nodes/NumberNode.js');
    var Tree = require('./grammar/nodes/Tree.js');
    var OperatorNode = require('./grammar/nodes/OperatorNode.js');
%}

/* operator associations and precedence */

%left '+'
%left '*'

%%

expressions
    : E EOF
    {return console.log(processTree($1)); };

E
    : E '+' E
        {$$ = new Tree(new OperatorNode($2), [$3, $1]);}

    | E '*' E
        {$$ = new Tree(new OperatorNode($2), [$3, $1]);}

    | NAT
        {$$ = new NumberNode($1);}
    ;