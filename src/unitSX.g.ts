import { RoofPitch, RoofPitchUnits } from "./roofPitch";
import { Area, AreaUnits } from "./area.g";
import { Length, LengthUnits } from "./length.g";

export interface IUnitSX {
    val: number;
    unit: LengthUnits | AreaUnits | RoofPitchUnits; 
    unitType: Area | Length | RoofPitch;
}


export class UnitSX implements IUnitSX {
    val: number;
    unit: LengthUnits | AreaUnits | RoofPitchUnits; 
    unitType: Area | Length | RoofPitch;

    constructor(val: number, unit: any, unitType: any) {
        this.val = val;
        this.unit = unit;
        this.unitType = unitType;
    }

    // Overloaded method signatures
    setUnit(val: number, unit: LengthUnits, unitType: Length): void;
    setUnit(val: number, unit: AreaUnits, unitType: Area): void;
    setUnit(val: number, unit: RoofPitchUnits, unitType: RoofPitch): void;
    
    // Method implementation
    setUnit(val: number, unit: LengthUnits | AreaUnits | RoofPitchUnits, unitType: Area | Length | RoofPitch): void {
        this.val = val;
        this.unit = unit;
        this.unitType = unitType;
    }
}
