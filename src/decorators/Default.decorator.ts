import { SchemaHelpers } from './SchemaHelpers';

/**
 * Specify a default value for a mongoose schema field
 * 
 * @export
 * @param {*} val
 * @returns
 */
export function Default(val: any) {
  return SchemaHelpers.setSchemaProperty('default', val);
}