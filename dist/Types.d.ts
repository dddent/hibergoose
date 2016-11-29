/// <reference types="mongoose" />
import * as mongoose from 'mongoose';
export declare namespace hibergoose {
    type Document<T> = T & mongoose.Document;
}
