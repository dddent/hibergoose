import * as mongoose from 'mongoose';

export namespace hibergoose {
  export type Document<T> = T & mongoose.Document;
}