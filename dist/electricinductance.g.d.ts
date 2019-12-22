export declare enum ElectricInductanceUnits {
    Henries = 0,
    Nanohenries = 1,
    Microhenries = 2
}
export declare class ElectricInductance {
    private value;
    constructor(value: number, fromUnit: ElectricInductanceUnits);
    get Henries(): number;
    get Nanohenries(): number;
    get Microhenries(): number;
    static FromHenries(value: number): ElectricInductance;
    static FromNanohenries(value: number): ElectricInductance;
    static FromMicrohenries(value: number): ElectricInductance;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=electricinductance.g.d.ts.map