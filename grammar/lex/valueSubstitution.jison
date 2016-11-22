%lex

%%
\s+         {/* skip whitespace */}
[0-9]+      {return 'NAT';}
"+"         {return '+';}
"*"         {return '*';}
"="         {return '=';}
";"         {return 'end';}
[a-zA-Z]+   {return 'variable';}
<<EOF>>     {return 'EOF'}

/lex

%{
%}

/* operator associations and precedence */

%left '+'
%left  '*'
%right '='
%right 'end'

%%

expressions
    :expr EOF
expr :  E | E E;
E
    : E end
        {$$ = $$; console.log('in E end :', $$);}
    | variable '=' E
        { t = Number($3); $$ = Number($3);}
    | E '+' E
        { $$ = Number(t) + Number($3); console.log(t,$3,'$$ value is :', $$);}

    | NAT { $$ =  Number(yytext)}

    |variable
    ;