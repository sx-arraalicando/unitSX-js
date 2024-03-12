import { AreaUnits } from "./area.g";
import { LengthUnits } from "./length.g";
import { RoofPitchUnits } from "./roofPitch";
import { UnitSX } from "./unitSX.g";

/** MassUnits enumeration */
export enum MassUnits {
    Grams,
    Pounds,    
    Kilograms,
    Kilopounds
}

export class Mass extends UnitSX {
    private gramsLazy: number = 0;    
    private poundsLazy: number = 0;    
    private kilogramsLazy: number = 0;
    private kilopoundsLazy: number = 0;

    /**
     * Create a new Mass.
     * @param value The value.
     * @param fromUnit The ‘Mass’ unit to create from.
     * The default unit is Kilograms
     */
    public constructor(value: number, fromUnit: LengthUnits | AreaUnits | RoofPitchUnits | MassUnits) {        
        super(value, fromUnit, typeof(Mass));
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

    public get Grams(): number {
        if(this.gramsLazy !== null){
            return this.gramsLazy;
        }        

        if(this.getUnitSystem() == UnitSystems.Imperial){            
            return this.gramsLazy = this.val * 453.592;
        }

        return this.val;
    }

    public get Pounds(): number {
        if(this.poundsLazy !== null){
            return this.poundsLazy;
        }        

        if(this.getUnitSystem() == UnitSystems.Metric){            
            return this.poundsLazy = this.val / 453.592;
        }

        return this.val;
    }

    public get Kilograms(): number {
        if(this.kilogramsLazy !== null){
            return this.kilogramsLazy;
        }        

        if(this.getUnitSystem() == UnitSystems.Imperial){            
            return this.kilogramsLazy = this.val / (1000 * 0.453592);
        }

        return this.val;
    }

    public get Kilopounds(): number {
        if(this.kilopoundsLazy !== null){
            return this.kilopoundsLazy;
        }        

        if(this.getUnitSystem() == UnitSystems.Metric){            
            return this.kilopoundsLazy = this.val * 1000 * 0.453592;
        }

        return this.val;
    }

    /**
     * Create a new Mass instance from a Grams
     *
     * @param value The unit as Grams to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromGrams(value: number): Mass {
        return new Mass(value, MassUnits.Grams);
    }

    /**
     * Create a new Mass instance from a Pounds
     * The pound or pound-mass (abbreviations: lb, lbm) is a unit of mass used in the imperial, United States customary and other systems of measurement. A number of different definitions have been used, the most common today being the international avoirdupois pound which is legally defined as exactly 0.45359237 kilograms, and which is divided into 16 avoirdupois ounces.
     * @param value The unit as Pounds to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromPounds(value: number): Mass {
        return new Mass(value, MassUnits.Pounds);
    }

    /**
     * Create a new Mass instance from a Kilograms
     *
     * @param value The unit as Kilograms to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromKilograms(value: number): Mass {
        return new Mass(value, MassUnits.Kilograms);
    }

    /**
     * Create a new Mass instance from a Kilopounds
     *
     * @param value The unit as Kilopounds to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromKilopounds(value: number): Mass {
        return new Mass(value, MassUnits.Kilopounds);
    }

    /**
     * Format the Mass to string.
     * Note! the default format for Mass is Kilograms.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Mass.
     * @returns The string format of the Mass.
     */
    public toString(unit: MassUnits = MassUnits.Kilograms): string {
        switch (unit) {            
            case MassUnits.Grams:
                return this.Grams + ` g`;
            case MassUnits.Pounds:
                return this.Pounds + ` lb`;
            case MassUnits.Kilograms:
                return this.Kilograms + ` kg`;
        default:
            break;
        }
        return this.val.toString();
    }

    /**
     * Get Mass unit abbreviation.
     * Note! the default abbreviation for Mass is Kilograms.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Mass.
     * @returns The abbreviation string of Mass.
     */
    public getUnitAbbreviation(unitAbbreviation: MassUnits = MassUnits.Kilograms): string {

        switch (unitAbbreviation) {
            
            case MassUnits.Grams:
                return `g`;
            case MassUnits.Pounds:
                return `lb`;
            case MassUnits.Kilograms:
                return `kg`;
            case MassUnits.Kilopounds:
                return `klb`;
        default:
            break;
        }
        return '';
    }
}
