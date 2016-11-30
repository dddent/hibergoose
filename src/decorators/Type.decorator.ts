import * as mongoose from 'mongoose';

import { SchemaHelpers } from './SchemaHelpers';
import { DbObject } from '../DbObject';

/**
 * sets the type in the mongoose schema for the decorated property
 * 
 * @export
 * @param {SchemaHelpers.SchemaType} type
 * @returns
 */
export function Type(type: SchemaHelpers.SchemaType) {
  return SchemaHelpers.setSchemaProperty('type', type);
}