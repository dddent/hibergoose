import * as mongoose from 'mongoose';

import { getQueryHelpers } from './QueryHelper.decorator';

export namespace SchemaHelpers {
  const modelMetadataKey = Symbol('hgoose:modelname');

  export type SchemaType = typeof String |
    typeof Number |
    typeof Date |
    typeof Buffer |
    typeof Boolean |
    typeof mongoose.Schema.Types.Mixed |
    typeof mongoose.Schema.Types.ObjectId |
    typeof mongoose.Schema.Types.Array;


  export const schemaMetadataKey = Symbol('hgoose:schema');

  export function setSchemaProperty(schemaProperty: string, value: any) {
    return (target: any, propertyName: string) => {
      let schema = Reflect.getMetadata(schemaMetadataKey, target);

      if (!schema) schema = {};

      if (!schema[propertyName]) schema[propertyName] = {};

      schema[propertyName][schemaProperty] = value;

      Reflect.defineMetadata(schemaMetadataKey, schema, target);
    };
  }

  export function getSchema(target: any) {
    let schema = new mongoose.Schema(Reflect.getMetadata(schemaMetadataKey, target));

    (<any>schema).query = getQueryHelpers(target);

    return schema;
  }

  export function hasSchema(target: any) {
    return Reflect.hasMetadata(schemaMetadataKey, target);
  }

  export function getSchemaMetadata(target: any) {
    return Reflect.getMetadata(schemaMetadataKey, target);
  }


  export function getModelName(target: any) {
    return Reflect.getMetadata(modelMetadataKey, target);
  }

  export function hasModelName(target: any) {
    return Reflect.hasMetadata(modelMetadataKey, target);
  }
}