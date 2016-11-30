import * as mongoose from 'mongoose';
import {
  getCollectionName,
  getModelName,
  hasModelName
} from './decorators';
import { SchemaHelpers } from './decorators/SchemaHelpers';

import { hibergoose } from './Types';

/**
 * inherited classes contain information about the mongoose model created using
 * hibergoose decorators
 * 
 * @export
 * @abstract
 * @class DbObject
 * @template T
 */
export abstract class DbObject<T> {
  /**
   * The mongoose model of the object created using hibergoose decorators
   * 
   * @readonly
   * @type {mongoose.Model<hibergoose.Document<T>>}
   */
  public get model(): mongoose.Model<hibergoose.Document<T>> {
    return mongoose.model<hibergoose.Document<T>>('name');
  }

  /**
   * The mongoose schema of the object created using hibergoose decorators
   * 
   * @readonly
   * @type {mongoose.Schema}
   */
  public get schema(): mongoose.Schema {
    return SchemaHelpers.getSchema(this);
  }

  /**
   * The name of the collection the documents for this class are found in if one
   * was specified using the @Collection decorator
   * 
   * @readonly
   * @type {string}
   */
  public get collectionName(): string {
    return getCollectionName(this._constr);
  }

  /**
   * The name of the model of the documents for this class if one * was specified 
   * using the @Collection decorator
   * 
   * @readonly
   * @type {string}
   */
  public get modelName(): string {
    return (hasModelName(this._constr)) ? getModelName(this._constr) : this.collectionName;
  }

  private get _constr(): any {
    return (<any>this).constructor;
  }
}