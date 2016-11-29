import { SchemaHelpers } from './SchemaHelpers';
import { DbObject } from '../DbObject';

export function Subschema(subschema: typeof DbObject) {
  return SchemaHelpers.setSchemaProperty('type', (<DbObject<any>>new (<any>subschema)()).schema);
}