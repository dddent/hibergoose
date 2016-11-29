import { SchemaHelpers } from './SchemaHelpers';

export function Default(val: any) {
  return SchemaHelpers.setSchemaProperty('default', val);
}