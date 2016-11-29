"use strict";
exports.schemaMetadataKey = Symbol('hgoose:schema');
function setSchemaProperty(schemaProperty, value) {
    return (target, propertyName) => {
        let schema = Reflect.getMetadata(exports.schemaMetadataKey, target);
        if (!schema)
            schema = {};
        if (!schema[propertyName])
            schema[propertyName] = {};
        schema[propertyName][schemaProperty] = value;
        Reflect.defineMetadata(exports.schemaMetadataKey, schema, target);
    };
}
exports.setSchemaProperty = setSchemaProperty;
//# sourceMappingURL=setSchemaProperty.js.map