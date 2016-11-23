var lookupTable = function(){
    this.addToMap =  function (identifier, value) {
        this.identifierMapping[identifier] = value;
    };
    
    this.identifierMapping = {};
    
    this.getIdentifierValue = function (identifier) {
        return this.identifierMapping[identifier];    
    };
};

module.exports = lookupTable;
