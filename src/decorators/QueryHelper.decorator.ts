import { SchemaHelpers } from './SchemaHelpers';

const schemaQueryHelperMetadataKey = Symbol('hgoose:queryhelper');

/**
 * marks a function to be a query helper for the model of the decorated DbObject
 * 
 * @export
 * @returns
 */
export function QueryHelper() {
  return (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) => {
    let helpers = Reflect.getMetadata(schemaQueryHelperMetadataKey, target);

    if (!helpers) helpers = {};

    helpers[propertyName] = descriptor.value;

    Reflect.defineMetadata(schemaQueryHelperMetadataKey, helpers, target);
  }
}

/**
 * returns the query helpers for the given DbObject
 * 
 * @export
 * @param {*} target
 * @returns
 */
export function getQueryHelpers(target: any) {
  return Reflect.getMetadata(schemaQueryHelperMetadataKey, target);
}