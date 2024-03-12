import { RoofPitchUnits } from "./roofPitch";
import { LengthUnits } from "./length.g";
import { UnitSX } from "./unitSX.g";
import { MassUnits } from "./mass.g";

/** AreaUnits enumeration */
export enum AreaUnits {
    /** */
    SquareMeters,
    /** */
    SquareFeet
}

export class Area extends UnitSX {

    private squaremetersLazy: number | null = null;
    private squarefeetLazy: number | null = null;

    /**
     * Create a new Area.
     * @param value The value.
     * @param fromUnit The ‘Area’ unit to create from.
     * The default unit is SquareMeters
     */

    public constructor(value: number, fromUnit: LengthUnits | AreaUnits | RoofPitchUnits | MassUnits) {        
        super(value, fromUnit, typeof(Area));
    }

    public getUnit() : LengthUnits | AreaUnits | RoofPitchUnits | MassUnits {
        return this.unit;
    }

    public getUnitSystem() : UnitSystems {
        return this.unit == RoofPitchUnits.Degrees ? UnitSystems.Metric : UnitSystems.Imperial
    }

    public baseVal() : number {
        return this.val;
    }

    public get SquareMeters(): number {
        if(this.squaremetersLazy !== null){
            return this.squaremetersLazy;
        }

        if(this.getUnitSystem() == UnitSystems.Imperial){
            return this.squaremetersLazy = this.val * 10.7639
        }

        return this.val;
    }

    /** */
    public get SquareFeet(): number {
        if(this.squarefeetLazy !== null){
            return this.squarefeetLazy;
        }

        if(this.getUnitSystem() == UnitSystems.Metric){            
            return this.squarefeetLazy = this.val * 0.092903;
        }

        return this.val;
    }


    /**
     * Create a new Area instance from a SquareFeet
     *
     * @param value The unit as SquareFeet to create a new Area from.
     * @returns The new Area instance.
     */
    public static FromSquareFeet(value: number): Area {
        return new Area(value, AreaUnits.SquareFeet);
    }

    /**
     * Convert Area to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: AreaUnits): number {
        switch (toUnit) {
            case AreaUnits.SquareMeters: return this.SquareMeters;
            case AreaUnits.SquareFeet: return this.SquareFeet;

            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Area to string.
     * Note! the default format for Area is SquareMeters.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Area.
     * @returns The string format of the Area.
     */
    public toString(): string {
        switch (this.unit) {
            case AreaUnits.SquareMeters:
                return this.SquareMeters + ` m²`;
            case AreaUnits.SquareFeet:
                return this.SquareFeet + ` ft²`;
        default:
            break;
        }
        return this.val.toString();
    }

    /**
     * Get Area unit abbreviation.
     * Note! the default abbreviation for Area is SquareMeters.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Area.
     * @returns The abbreviation string of Area.
     */
    public getUnitAbbreviation(): string {
        switch (this.unit) {
            case AreaUnits.SquareMeters:
                return `m²`;
            case AreaUnits.SquareFeet:
                return `ft²`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Area are equals to the current Area.
     * @param area The other Area.
     * @returns True if the given Area are equal to the current Area.
     */
    public equals(area: Area): boolean {
        return this.val === area.val;
    }

    /**
     * Compare the given Area against the current Area.
     * @param area The other Area.
     * @returns 0 if they are equal, -1 if the current Area is less then other, 1 if the current Area is greater then other.
     */
    public compareTo(area: Area): number {

        if (this.val > area.val)
            return 1;
        if (this.val < area.val)
            return -1;
        return 0;
    }
}
