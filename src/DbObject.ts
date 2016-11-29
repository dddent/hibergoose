import * as mongoose from 'mongoose';
import {
  getCollectionName,
  getModelName,
  hasModelName
} from './decorators';
import { SchemaHelpers } from './decorators/SchemaHelpers';

import { hibergoose } from './Types';

export class DbObject<T> {
  public get model(): mongoose.Model<hibergoose.Document<T>> {
    return mongoose.model<hibergoose.Document<T>>('name');
  }

  public get schema(): mongoose.Schema {
    return SchemaHelpers.getSchema(this);
  }

  public get collectionName(): string {
    return getCollectionName(this._constr);
  }

  public get modelName(): string {
    return (hasModelName(this._constr)) ? getModelName(this._constr) : this.collectionName;
  }

  private get _constr(): any {
    return (<any>this).constructor;
  }
}