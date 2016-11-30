import * as mongoose from 'mongoose';

export namespace hibergoose {
  /**
   * a mongoose document of type T
   */
  export type Document<T> = T & mongoose.Document;
}