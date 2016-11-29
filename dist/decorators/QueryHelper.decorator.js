"use strict";
const schemaQueryHelperMetadataKey = Symbol('hgoose:queryhelper');
function QueryHelper() {
    return (target, propertyName, descriptor) => {
        let helpers = Reflect.getMetadata(schemaQueryHelperMetadataKey, target);
        if (!helpers)
            helpers = {};
        helpers[propertyName] = descriptor.value;
        Reflect.defineMetadata(schemaQueryHelperMetadataKey, helpers, target);
    };
}
exports.QueryHelper = QueryHelper;
function getQueryHelpers(target) {
    return Reflect.getMetadata(schemaQueryHelperMetadataKey, target);
}
exports.getQueryHelpers = getQueryHelpers;
//# sourceMappingURL=QueryHelper.decorator.js.map