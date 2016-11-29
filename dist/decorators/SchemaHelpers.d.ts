/// <reference types="node" />
/// <reference types="mongoose" />
import * as mongoose from 'mongoose';
export declare namespace SchemaHelpers {
    type SchemaType = typeof String | typeof Number | typeof Date | typeof Buffer | typeof Boolean | typeof mongoose.Schema.Types.Mixed | typeof mongoose.Schema.Types.ObjectId | typeof mongoose.Schema.Types.Array;
    const schemaMetadataKey: symbol;
    function setSchemaProperty(schemaProperty: string, value: any): (target: any, propertyName: string) => void;
    function getSchema(target: any): mongoose.Schema;
    function hasSchema(target: any): boolean;
    function getSchemaMetadata(target: any): any;
    function getModelName(target: any): any;
    function hasModelName(target: any): boolean;
}
