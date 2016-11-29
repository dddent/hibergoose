import * as mongoose from 'mongoose';

import { DbObject } from '../DbObject';
import { SchemaHelpers } from './SchemaHelpers';
import { Type } from './Type.decorator';

export function Populate(obj: DbObject<any>, type?: SchemaHelpers.SchemaType) {
  return function (target: any, propertyName: string) {
    Type(type || mongoose.Schema.Types.ObjectId)(target, propertyName);

    SchemaHelpers.setSchemaProperty('ref', SchemaHelpers.getModelName(target))(target, propertyName);
  };
}