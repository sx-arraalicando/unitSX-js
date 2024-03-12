import { RoofPitchUnits } from "./roofPitch";
import { Area, AreaUnits } from "./area.g";
import { UnitSX } from "./unitSX.g";
import { MassUnits } from "./mass.g";

/** LengthUnits enumeration */
export enum LengthUnits {
    Meters,
    Feet,
}

export class Length extends UnitSX {
    private metersLazy: number = 0;
    private feetLazy: number = 0;
    /**
     * Create a new Length.
     * @param value The value.
     * @param fromUnit The ‘Length’ unit to create from.
     * The default unit is Meters
     */
    public constructor(value: number, fromUnit: LengthUnits | AreaUnits | RoofPitchUnits | MassUnits) {        
        super(value, fromUnit, typeof(Length));
    }

    public getUnit() : LengthUnits | AreaUnits | RoofPitchUnits | MassUnits {
        return this.unit;
    }

    public getUnitSystem() : UnitSystems {
        return this.unit == LengthUnits.Meters ? UnitSystems.Metric : UnitSystems.Imperial;
    }

    public baseVal() : number {
        return this.val;
    }
    
    public get Meters(): number {
        if(this.metersLazy !== null){
            return this.metersLazy;
        }        

        if(this.getUnitSystem() == UnitSystems.Imperial){            
            return this.metersLazy = this.val * 0.3048;
        }

        return this.val;
    }

    public get Feet(): number {
        if(this.feetLazy !== null){
            return this.feetLazy;
        }

        if(this.getUnitSystem() == UnitSystems.Metric){          
            return this.feetLazy = this.val / 0.3048;
        }

        return this.val;
    }

    /**
     * Create a new Length instance from a Meters
     *
     * @param value The unit as Meters to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromMeters(value: number): Length {
        return new Length(value, LengthUnits.Meters);
    }

    /**
     * Create a new Length instance from a Feet
     *
     * @param value The unit as Feet to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromFeet(value: number): Length {
        return new Length(value, LengthUnits.Feet);
    }

    /**
     * Format the Length to string.
     * Note! the default format for Length is Meters.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Length.
     * @returns The string format of the Length.
     */
    public toString(): string {
        switch (this.unit) {
            
            case LengthUnits.Meters:
                return this.Meters + ` m`;
            case LengthUnits.Feet:
                return this.Feet + ` ft`;
        default:
            break;
        }

        return this.val.toString();
    }

    /**
     * Get Length unit abbreviation.
     * Note! the default abbreviation for Length is Meters.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Length.
     * @returns The abbreviation string of Length.
     */
    public getUnitAbbreviation(): string {
        switch (this.unit) {            
            case LengthUnits.Meters:
                return `m`;
            case LengthUnits.Feet:
                return `ft`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Length are equals to the current Length.
     * @param length The other Length.
     * @returns True if the given Length are equal to the current Length.
     */
    public equals(length: Length): boolean {
        return this.val === length.val;
    }

    /**
     * Compare the given Length against the current Length.
     * @param length The other Length.
     * @returns 0 if they are equal, -1 if the current Length is less then other, 1 if the current Length is greater then other.
     */
    public compareTo(length: Length): number {

        if (this.val > length.val)
            return 1;
        if (this.val < length.val)
            return -1;
        return 0;
    }

    /**
     * Add the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    public add(length: Length): Length {
        return new Length(this.val + length.val, this.unit)
    }

    /**
     * Subtract the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    public subtract(length: Length): Length {
        return new Length(this.val - length.val, this.unit)
    }

    /**
     * Multiply the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    public multiply(scalar: number): Length;
    public multiply(length: Length): Area;

    // Implementation
    public multiply(scalarOrLength: number | Length): Length | Area {
        if (typeof scalarOrLength === 'number') {
            // Scalar multiplication, returns a scaled Length
            return new Length(this.val * scalarOrLength, this.unit);
        } else {
            // Multiplying two lengths, returns an Area
            // Assumes both lengths are in the same unit and converts to m² for simplicity
            const areaValue = this.val * scalarOrLength.val;// Simplified unit handling

            let areaUnits = AreaUnits.SquareMeters
            if(this.getUnitSystem() == UnitSystems.Imperial){
                areaUnits = AreaUnits.SquareFeet;
            }
            return new Area(areaValue, areaUnits);
        }
    }

    public divide(scalar: number): Length;
    public divide(length: Length): number;
    /**
     * Divide the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    public divide(scalarOrLength: number | Length): Length | number {
        if (typeof scalarOrLength === 'number') {
            // Length divided by a scalar, returns a scaled Length
            return new Length(this.val / scalarOrLength, this.unit);
        } else {
            // Length divided by another Length, returns a dimensionless number (ratio)
            // This implementation assumes both Lengths are in the same unit for simplicity
            // You might need to handle unit conversion if they're in different units
            return this.val / scalarOrLength.val;
        }
    }
    
}
