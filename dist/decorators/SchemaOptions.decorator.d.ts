import { ISchemaOptions } from './ISchemaOptions';
export declare function SchemaOptions(options: ISchemaOptions): {
    (target: Function): void;
    (target: Object, targetKey: string | symbol): void;
};
export declare function getShemaOptions(target: any): any;
export declare function hasSchemaOptions(target: any): boolean;
