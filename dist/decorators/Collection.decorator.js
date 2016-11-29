"use strict";
const collectionMetadataKey = Symbol('hgoose:collname');
function Collection(name) {
    return Reflect.metadata(collectionMetadataKey, name);
}
exports.Collection = Collection;
function getCollectionName(target) {
    return Reflect.getMetadata(collectionMetadataKey, target);
}
exports.getCollectionName = getCollectionName;
//# sourceMappingURL=Collection.decorator.js.map