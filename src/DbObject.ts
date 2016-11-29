import * as mongoose from 'mongoose';
import {
  getCollectionName,
  getModelName,
  hasModelName
} from './decorators';
import { SchemaHelpers } from './decorators/SchemaHelpers';

type Doc<T> = T & mongoose.Document;

export class DbObject<T> {
  public get model(): mongoose.Model<Doc<T>> {
    return mongoose.model<Doc<T>>('name');
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