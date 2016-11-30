import { DbObject } from '../DbObject';

const collectionMetadataKey = Symbol('hgoose:collname');

/**
 * Use on classes of type DbObject to specify the collection documents for this
 * DbObject are found in
 * 
 * @export
 * @param {string} name
 * @returns
 */
export function Collection(name: string) {
  return Reflect.metadata(collectionMetadataKey, name);
}

/**
 * returns the collection name for the given constructor
 * 
 * @export
 * @param {*} target
 * @returns {string}
 */
export function getCollectionName(target: any): string {
  return Reflect.getMetadata(collectionMetadataKey, target);
}