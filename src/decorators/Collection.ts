import { DbObject } from '../DbObject';

const collectionMetadataKey = Symbol('hgoose:collname');

export function Collection(name: string) {
  return Reflect.metadata(collectionMetadataKey, name);
}

export function getCollectionName(target: any): string {
  return Reflect.getMetadata(collectionMetadataKey, target);
}