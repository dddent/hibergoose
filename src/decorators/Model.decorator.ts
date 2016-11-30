const modelMetadataKey = Symbol('hgoose:modelname');

/**
 * Use on classes of type DbObject to specify the name of the mongoose model
 * for a DbObject
 * 
 * @export
 * @param {string} name the model name
 * @returns
 */
export function Model(name: string) {
  return Reflect.metadata(modelMetadataKey, name);
}

/**
 * returns the mongoose model name for the given constructor
 * 
 * @export
 * @param {*} target
 * @returns
 */
export function getModelName(target: any) {
  return Reflect.getMetadata(modelMetadataKey, target);
}

/**
 * weather a model name exists for the given constructor
 * 
 * @export
 * @param {*} target
 * @returns
 */
export function hasModelName(target: any) {
  return Reflect.hasMetadata(modelMetadataKey, target);
}