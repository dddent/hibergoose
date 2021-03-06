import * as mongoose from 'mongoose';

import { DbObject } from '../DbObject';
import { SchemaHelpers } from './SchemaHelpers';
import { Type } from './Type.decorator';

/**
 * the decorated property will be set to be a reference to the collection
 * of the given DbObject
 * 
 * @export
 * @param {DbObject<any>} obj
 * @param {SchemaHelpers.SchemaType} [type]
 * @returns
 */
export function Populate(obj: DbObject<any>, type?: SchemaHelpers.SchemaType) {
  return function (target: any, propertyName: string) {
    Type(type || mongoose.Schema.Types.ObjectId)(target, propertyName);

    SchemaHelpers.setSchemaProperty('ref', SchemaHelpers.getModelName(target))(target, propertyName);
  };
}