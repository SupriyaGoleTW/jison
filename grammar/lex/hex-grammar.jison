/* description: Parses and executes HEX numbers. */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9a-f]              {return 'HEX';}
<<EOF>>               {return 'EOF';}

/lex

%% /* language grammar */

S : e EOF { typeof console !== 'undefined' ? console.log($1) : print($1);
                    return $1; };
e : e HEX {}
    | HEX {};