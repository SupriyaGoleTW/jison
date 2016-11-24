var actions = {
    process: function (trees, lookupTable) {
        var finalOutput = null;
        trees.forEach(function (tree) {
            finalOutput = tree.evaluateNodes(lookupTable);
        });
        return finalOutput;
    },

    toJS: function (trees, lookupTable) {
        var finalOutput = trees.map(function (tree) {
            var jsExpression = tree.toJS(lookupTable);
            var terminator = ';';
            if (tree.parentNode.type !== 'assignment')
                jsExpression = 'console.log(' + jsExpression + ')';
            
            return jsExpression + terminator;
        });
        return finalOutput.join('\n');
    }
};

module.exports = actions;