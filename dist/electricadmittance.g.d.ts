export declare enum ElectricAdmittanceUnits {
    Siemens = 0,
    Nanosiemens = 1,
    Microsiemens = 2
}
export declare class ElectricAdmittance {
    private value;
    constructor(value: number, fromUnit: ElectricAdmittanceUnits);
    get Siemens(): number;
    get Nanosiemens(): number;
    get Microsiemens(): number;
    static FromSiemens(value: number): ElectricAdmittance;
    static FromNanosiemens(value: number): ElectricAdmittance;
    static FromMicrosiemens(value: number): ElectricAdmittance;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=electricadmittance.g.d.ts.map