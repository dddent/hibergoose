import { SchemaHelpers } from './SchemaHelpers';

/**
 * Mark a mongoose schema field to be indexed
 * 
 * @export
 * @returns
 */
export function Index() {
  return SchemaHelpers.setSchemaProperty('index', true);
}