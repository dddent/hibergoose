export declare function Model(name: string): {
    (target: Function): void;
    (target: Object, targetKey: string | symbol): void;
};
export declare function getModelName(target: any): any;
export declare function hasModelName(target: any): boolean;
