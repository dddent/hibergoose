"use strict";
const mongoose = require('mongoose');
const decorators_1 = require('./decorators');
const SchemaHelpers_1 = require('./decorators/SchemaHelpers');
class DbObject {
    get model() {
        return mongoose.model('name');
    }
    get schema() {
        return SchemaHelpers_1.SchemaHelpers.getSchema(this);
    }
    get collectionName() {
        return decorators_1.getCollectionName(this._constr);
    }
    get modelName() {
        return (decorators_1.hasModelName(this._constr)) ? decorators_1.getModelName(this._constr) : this.collectionName;
    }
    get _constr() {
        return this.constructor;
    }
}
exports.DbObject = DbObject;
//# sourceMappingURL=DbObject.js.map