import * as mongoose from 'mongoose';

import { SchemaHelpers } from './SchemaHelpers';
import { DbObject } from '../DbObject';

export function Type(type: SchemaHelpers.SchemaType) {
  return SchemaHelpers.setSchemaProperty('type', type);
}