var actions = {
    process: function (trees) {
        var finalOutput = null;
        trees.forEach(function (tree) {
            finalOutput = tree.evaluateNodes();
        });
        return finalOutput;
    },
    addToMap: function (identifier, value) {
        this.identifierMapping[identifier.value] = value;
    },
    identifierMapping:{}
};

module.exports = actions;
