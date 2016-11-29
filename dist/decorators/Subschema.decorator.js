"use strict";
const SchemaHelpers_1 = require('./SchemaHelpers');
function Subschema(subschema) {
    return SchemaHelpers_1.SchemaHelpers.setSchemaProperty('type', (new subschema()).schema);
}
exports.Subschema = Subschema;
//# sourceMappingURL=Subschema.decorator.js.map