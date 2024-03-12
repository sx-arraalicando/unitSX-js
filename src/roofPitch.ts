import { AreaUnits } from "./area.g";
import { LengthUnits } from "./length.g";
import { UnitSX } from "./unitSX.g";

/** RoofPitchUnits enumeration */
export enum RoofPitchUnits {
    Degrees,
    Xin12
}

export class RoofPitch extends UnitSX{
    private degreesLazy: number = 0;
    private xin12Lazy: number = 0;

    /**
     * Create a new RoofPitch.
     * @param value The value.
     * @param fromUnit The ‘RoofPitch’ unit to create from.
     * The default unit is Degrees
     */
    public constructor(value: number, fromUnit: LengthUnits | AreaUnits | RoofPitchUnits) {        
        super(value, fromUnit, typeof(RoofPitch));
    }

    public getUnit() : LengthUnits | AreaUnits | RoofPitchUnits {
        return this.unit;
    }

    public getUnitSystem() : UnitSystems {
        return this.unit == RoofPitchUnits.Degrees ? UnitSystems.Metric : UnitSystems.Imperial
    }

    public baseVal() : number {
        return this.val;
    }

    public get Degrees(): number {
        if(this.degreesLazy !== null){
            return this.degreesLazy;
        }        

        if (this.getUnitSystem() == UnitSystems.Imperial){         
            throw new TypeError('To-do: nearestXin12FromAusPitch');
        }

        return this.val;
    }

    public get Xin12(): number {
        if(this.xin12Lazy !== null){
            return this.xin12Lazy;
        }        

        if (this.getUnitSystem() == UnitSystems.Metric){         
            throw new TypeError('To-do: nearestAusPitchFromXin12');
        }

        return this.val;
    }
    
    public static FromXin12(value: number): RoofPitch {
        return new RoofPitch(value, RoofPitchUnits.Xin12);
    }

    /**
     * Create a new RoofPitch instance from a Degrees
     *
     * @param value The unit as Degrees to create a new RoofPitch from.
     * @returns The new RoofPitch instance.
     */
    public static FromDegrees(value: number): RoofPitch {
        return new RoofPitch(value, RoofPitchUnits.Degrees);
    }

    /**
     * Format the RoofPitch to string.
     * Note! the default format for RoofPitch is Degrees.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the RoofPitch.
     * @returns The string format of the RoofPitch.
     */
    public toString(): string {
        switch (this.unit) {            
            case RoofPitchUnits.Xin12:
                return this.Xin12 + ` in 12`;
            case RoofPitchUnits.Degrees:
                return this.Degrees + ` °`;
        default:
            break;
        }
        return this.val.toString();
    }

    /**
     * Get RoofPitch unit abbreviation.
     * Note! the default abbreviation for RoofPitch is Degrees.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the RoofPitch.
     * @returns The abbreviation string of RoofPitch.
     */
    public getUnitAbbreviation(): string {
        switch (this.unit) {            
            case RoofPitchUnits.Xin12:
                return `in 12`;
            case RoofPitchUnits.Degrees:
                return `°`;
        default:
            break;
        }
        return '';
    }
}
