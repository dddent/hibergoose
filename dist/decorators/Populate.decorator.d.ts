import { DbObject } from '../DbObject';
import { SchemaHelpers } from './SchemaHelpers';
export declare function Populate(obj: DbObject<any>, type?: SchemaHelpers.SchemaType): (target: any, propertyName: string) => void;
