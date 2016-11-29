"use strict";
const schemaOptionsMetadataKey = Symbol('hgoose:schemaoptions');
function SchemaOptions(options) {
    return Reflect.metadata(schemaOptionsMetadataKey, options);
}
exports.SchemaOptions = SchemaOptions;
function getShemaOptions(target) {
    return Reflect.getMetadata(schemaOptionsMetadataKey, target);
}
exports.getShemaOptions = getShemaOptions;
function hasSchemaOptions(target) {
    return Reflect.hasMetadata(schemaOptionsMetadataKey, target);
}
exports.hasSchemaOptions = hasSchemaOptions;
//# sourceMappingURL=SchemaOptions.decorator.js.map