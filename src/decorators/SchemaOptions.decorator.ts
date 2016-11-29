import { ISchemaOptions } from './ISchemaOptions';

const schemaOptionsMetadataKey = Symbol('hgoose:schemaoptions');

export function SchemaOptions(options: ISchemaOptions) {
  return Reflect.metadata(schemaOptionsMetadataKey, options);
}

export function getShemaOptions(target: any) {
  return Reflect.getMetadata(schemaOptionsMetadataKey, target);
}

export function hasSchemaOptions(target: any) {
  return Reflect.hasMetadata(schemaOptionsMetadataKey, target);
}