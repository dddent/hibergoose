"use strict";
const modelMetadataKey = Symbol('hgoose:modelname');
function Model(name) {
    return Reflect.metadata(modelMetadataKey, name);
}
exports.Model = Model;
function getModelName(target) {
    return Reflect.getMetadata(modelMetadataKey, target);
}
exports.getModelName = getModelName;
function hasModelName(target) {
    return Reflect.hasMetadata(modelMetadataKey, target);
}
exports.hasModelName = hasModelName;
//# sourceMappingURL=Model.js.map