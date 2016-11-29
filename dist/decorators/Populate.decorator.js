"use strict";
const mongoose = require('mongoose');
const SchemaHelpers_1 = require('./SchemaHelpers');
const Type_decorator_1 = require('./Type.decorator');
function Populate(obj, type) {
    return function (target, propertyName) {
        Type_decorator_1.Type(type || mongoose.Schema.Types.ObjectId)(target, propertyName);
        SchemaHelpers_1.SchemaHelpers.setSchemaProperty('ref', SchemaHelpers_1.SchemaHelpers.getModelName(target))(target, propertyName);
    };
}
exports.Populate = Populate;
//# sourceMappingURL=Populate.decorator.js.map