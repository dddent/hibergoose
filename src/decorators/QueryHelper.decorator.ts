import { SchemaHelpers } from './SchemaHelpers';

const schemaQueryHelperMetadataKey = Symbol('hgoose:queryhelper');

export function QueryHelper() {
  return (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) => {
    let helpers = Reflect.getMetadata(schemaQueryHelperMetadataKey, target);

    if (!helpers) helpers = {};

    helpers[propertyName] = descriptor.value;

    Reflect.defineMetadata(schemaQueryHelperMetadataKey, helpers, target);
  }
}

export function getQueryHelpers(target: any) {
  return Reflect.getMetadata(schemaQueryHelperMetadataKey, target);
}