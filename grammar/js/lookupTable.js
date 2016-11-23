var lookupTable = {
    addToMap: function (identifier, value) {
        this.identifierMapping[identifier] = value;
    },
    identifierMapping: {}
};

module.exports = lookupTable;
