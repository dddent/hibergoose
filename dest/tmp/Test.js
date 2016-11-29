"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const DbObject_1 = require('../DbObject');
const decorators_1 = require('../decorators');
const SubTest_1 = require('./SubTest');
let Test = class Test extends DbObject_1.DbObject {
};
__decorate([
    decorators_1.Type(String)
], Test.prototype, "name", void 0);
__decorate([
    decorators_1.Type(Number)
], Test.prototype, "age", void 0);
__decorate([
    decorators_1.Subschema(SubTest_1.SubTest)
], Test.prototype, "sub", void 0);
Test = __decorate([
    decorators_1.Collection('tests'),
    decorators_1.Model('test')
], Test);
exports.Test = Test;
//# sourceMappingURL=Test.js.map