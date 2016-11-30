import { ISchemaOptions } from './ISchemaOptions';

const schemaOptionsMetadataKey = Symbol('hgoose:schemaoptions');

/**
 * sets the schema options for the decorated DbObject
 * 
 * @export
 * @param {ISchemaOptions} options
 * @returns
 */
export function SchemaOptions(options: ISchemaOptions) {
  return Reflect.metadata(schemaOptionsMetadataKey, options);
}

/**
 * returns the schema options for the given DbObject
 * 
 * @export
 * @param {*} target
 * @returns
 */
export function getShemaOptions(target: any) {
  return Reflect.getMetadata(schemaOptionsMetadataKey, target);
}

/**
 * weather the given DbObject has schema options
 * 
 * @export
 * @param {*} target
 * @returns
 */
export function hasSchemaOptions(target: any) {
  return Reflect.hasMetadata(schemaOptionsMetadataKey, target);
}