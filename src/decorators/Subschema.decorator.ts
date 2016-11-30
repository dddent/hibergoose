import { SchemaHelpers } from './SchemaHelpers';
import { DbObject } from '../DbObject';

/**
 * adds the passed DbObject as a subschema of the decorated property
 * 
 * @export
 * @param {typeof DbObject} subschema
 * @returns
 */
export function Subschema(subschema: typeof DbObject) {
  return SchemaHelpers.setSchemaProperty('type', (<DbObject<any>>new (<any>subschema)()).schema);
}