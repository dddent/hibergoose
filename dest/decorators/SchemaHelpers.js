"use strict";
const mongoose = require('mongoose');
const QueryHelper_decorator_1 = require('./QueryHelper.decorator');
var SchemaHelpers;
(function (SchemaHelpers) {
    const modelMetadataKey = Symbol('hgoose:modelname');
    SchemaHelpers.schemaMetadataKey = Symbol('hgoose:schema');
    function setSchemaProperty(schemaProperty, value) {
        return (target, propertyName) => {
            let schema = Reflect.getMetadata(SchemaHelpers.schemaMetadataKey, target);
            if (!schema)
                schema = {};
            if (!schema[propertyName])
                schema[propertyName] = {};
            schema[propertyName][schemaProperty] = value;
            Reflect.defineMetadata(SchemaHelpers.schemaMetadataKey, schema, target);
        };
    }
    SchemaHelpers.setSchemaProperty = setSchemaProperty;
    function getSchema(target) {
        let schema = new mongoose.Schema(Reflect.getMetadata(SchemaHelpers.schemaMetadataKey, target));
        schema.query = QueryHelper_decorator_1.getQueryHelpers(target);
        return schema;
    }
    SchemaHelpers.getSchema = getSchema;
    function hasSchema(target) {
        return Reflect.hasMetadata(SchemaHelpers.schemaMetadataKey, target);
    }
    SchemaHelpers.hasSchema = hasSchema;
    function getSchemaMetadata(target) {
        return Reflect.getMetadata(SchemaHelpers.schemaMetadataKey, target);
    }
    SchemaHelpers.getSchemaMetadata = getSchemaMetadata;
    function getModelName(target) {
        return Reflect.getMetadata(modelMetadataKey, target);
    }
    SchemaHelpers.getModelName = getModelName;
    function hasModelName(target) {
        return Reflect.hasMetadata(modelMetadataKey, target);
    }
    SchemaHelpers.hasModelName = hasModelName;
})(SchemaHelpers = exports.SchemaHelpers || (exports.SchemaHelpers = {}));
//# sourceMappingURL=SchemaHelpers.js.map