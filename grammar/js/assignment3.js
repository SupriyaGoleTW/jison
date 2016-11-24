var process = function (trees,lookupTable) {
    var finalOutput = null;
    trees.forEach(function (tree) {
        finalOutput = tree.evaluateNodes(lookupTable);
    });
    return finalOutput;
};

module.exports = process;