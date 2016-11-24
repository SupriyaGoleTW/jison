var lookupTable = function () {
    this.addToMap = function (identifier, value) {
        this.identifierMapping[identifier] = value;
    };

    this.identifierMapping = {};

    this.getIdentifierValue = function (identifier) {
        var value = this.identifierMapping[identifier];
        if (value !== undefined) {
            return value;
        }
        throw new Error(identifier + ' is not defined');
    };

    this.has = function (identifier) {
      return !!this.identifierMapping[identifier];
    };
};

module.exports = lookupTable;
