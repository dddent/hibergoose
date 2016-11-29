const modelMetadataKey = Symbol('hgoose:modelname');

export function Model(name: string) {
  return Reflect.metadata(modelMetadataKey, name);
}

export function getModelName(target: any) {
  return Reflect.getMetadata(modelMetadataKey, target);
}

export function hasModelName(target: any) {
  return Reflect.hasMetadata(modelMetadataKey, target);
}