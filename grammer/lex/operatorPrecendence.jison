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
%}

/* operator associations and precedence */

%left '+'
%left  '*'

%%

expressions
    : E EOF
    { return console.log(expressionRepresenter($1)); };

E
    : E '+' E
    {$$ = [$1, $2, $3];}

    | E '*' E
    {$$ = [$1, $2, $3];}

    | NAT
    ;

