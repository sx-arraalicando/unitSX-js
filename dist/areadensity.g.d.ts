export declare enum AreaDensityUnits {
    KilogramsPerSquareMeter = 0
}
export declare class AreaDensity {
    private value;
    constructor(value: number, fromUnit: AreaDensityUnits);
    get KilogramsPerSquareMeter(): number;
    static FromKilogramsPerSquareMeter(value: number): AreaDensity;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=areadensity.g.d.ts.map