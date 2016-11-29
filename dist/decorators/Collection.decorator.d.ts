export declare function Collection(name: string): {
    (target: Function): void;
    (target: Object, targetKey: string | symbol): void;
};
export declare function getCollectionName(target: any): string;
