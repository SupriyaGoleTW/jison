%lex

%%
\s+         {/* skip whitespace */}
[0-9]+      {return 'NAT';}
"+"         {return '+';}
"*"         {return '*';}
<<EOF>>     {return 'EOF'}

/lex

%{
    var expressionRepresenter = require('./js/operatorPrecedence.js').expressionRepresenter;
    var NumberNode = require('./nodes/NumberNode.js');
    var Tree = require('./nodes/Tree.js');
    var OperatorNode = require('./nodes/OperatorNode.js');
%}

/* operator associations and precedence */

%left '+'
%left  '*'
%left  '-'

%%

expressions
    : E EOF
    { return console.log($1); };

E
    : E OP E
        {$$ = new Tree([$1, $2, $3]);}

    | NAT
        {$$ = new NumberNode($1);}
    ;

OP :
      '+'
        {$$ = new OperatorNode($1)}
    | '*'
        {$$ = new OperatorNode($1)}
    | '-'
        {$$ = new OperatorNode($1)}
    ;
