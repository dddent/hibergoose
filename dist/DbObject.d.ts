/// <reference types="mongoose" />
import * as mongoose from 'mongoose';
import { hibergoose } from './Types';
export declare abstract class DbObject<T> {
    readonly model: mongoose.Model<hibergoose.Document<T>>;
    readonly schema: mongoose.Schema;
    readonly collectionName: string;
    readonly modelName: string;
    private readonly _constr;
}
