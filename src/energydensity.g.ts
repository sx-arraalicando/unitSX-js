/** EnergyDensityUnits enumeration */
export enum EnergyDensityUnits {
    /** */
    JoulesPerCubicMeter,
    /** */
    WattHoursPerCubicMeter,
    /** */
    KilojoulesPerCubicMeter,
    /** */
    MegajoulesPerCubicMeter,
    /** */
    GigajoulesPerCubicMeter,
    /** */
    TerajoulesPerCubicMeter,
    /** */
    PetajoulesPerCubicMeter,
    /** */
    KilowattHoursPerCubicMeter,
    /** */
    MegawattHoursPerCubicMeter,
    /** */
    GigawattHoursPerCubicMeter,
    /** */
    TerawattHoursPerCubicMeter,
    /** */
    PetawattHoursPerCubicMeter
}

/** Energy density is the amount of energy stored in a substance per unit volume and is measured in J/m³. It is sometimes confused with energy per unit mass which is properly called specific energy. */
export class EnergyDensity {
    private value: number;
    private joulespercubicmeterLazy: number | null = null;
    private watthourspercubicmeterLazy: number | null = null;
    private kilojoulespercubicmeterLazy: number | null = null;
    private megajoulespercubicmeterLazy: number | null = null;
    private gigajoulespercubicmeterLazy: number | null = null;
    private terajoulespercubicmeterLazy: number | null = null;
    private petajoulespercubicmeterLazy: number | null = null;
    private kilowatthourspercubicmeterLazy: number | null = null;
    private megawatthourspercubicmeterLazy: number | null = null;
    private gigawatthourspercubicmeterLazy: number | null = null;
    private terawatthourspercubicmeterLazy: number | null = null;
    private petawatthourspercubicmeterLazy: number | null = null;

    /**
     * Create a new EnergyDensity.
     * @param value The value.
     * @param fromUnit The ‘EnergyDensity’ unit to create from.
     * The default unit is JoulesPerCubicMeter
     */
    public constructor(value: number, fromUnit: EnergyDensityUnits = EnergyDensityUnits.JoulesPerCubicMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of EnergyDensity is JoulesPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get JoulesPerCubicMeter(): number {
        if(this.joulespercubicmeterLazy !== null){
            return this.joulespercubicmeterLazy;
        }
        return this.joulespercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.JoulesPerCubicMeter);
    }

    /** */
    public get WattHoursPerCubicMeter(): number {
        if(this.watthourspercubicmeterLazy !== null){
            return this.watthourspercubicmeterLazy;
        }
        return this.watthourspercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.WattHoursPerCubicMeter);
    }

    /** */
    public get KilojoulesPerCubicMeter(): number {
        if(this.kilojoulespercubicmeterLazy !== null){
            return this.kilojoulespercubicmeterLazy;
        }
        return this.kilojoulespercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.KilojoulesPerCubicMeter);
    }

    /** */
    public get MegajoulesPerCubicMeter(): number {
        if(this.megajoulespercubicmeterLazy !== null){
            return this.megajoulespercubicmeterLazy;
        }
        return this.megajoulespercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.MegajoulesPerCubicMeter);
    }

    /** */
    public get GigajoulesPerCubicMeter(): number {
        if(this.gigajoulespercubicmeterLazy !== null){
            return this.gigajoulespercubicmeterLazy;
        }
        return this.gigajoulespercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.GigajoulesPerCubicMeter);
    }

    /** */
    public get TerajoulesPerCubicMeter(): number {
        if(this.terajoulespercubicmeterLazy !== null){
            return this.terajoulespercubicmeterLazy;
        }
        return this.terajoulespercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.TerajoulesPerCubicMeter);
    }

    /** */
    public get PetajoulesPerCubicMeter(): number {
        if(this.petajoulespercubicmeterLazy !== null){
            return this.petajoulespercubicmeterLazy;
        }
        return this.petajoulespercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.PetajoulesPerCubicMeter);
    }

    /** */
    public get KilowattHoursPerCubicMeter(): number {
        if(this.kilowatthourspercubicmeterLazy !== null){
            return this.kilowatthourspercubicmeterLazy;
        }
        return this.kilowatthourspercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.KilowattHoursPerCubicMeter);
    }

    /** */
    public get MegawattHoursPerCubicMeter(): number {
        if(this.megawatthourspercubicmeterLazy !== null){
            return this.megawatthourspercubicmeterLazy;
        }
        return this.megawatthourspercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.MegawattHoursPerCubicMeter);
    }

    /** */
    public get GigawattHoursPerCubicMeter(): number {
        if(this.gigawatthourspercubicmeterLazy !== null){
            return this.gigawatthourspercubicmeterLazy;
        }
        return this.gigawatthourspercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.GigawattHoursPerCubicMeter);
    }

    /** */
    public get TerawattHoursPerCubicMeter(): number {
        if(this.terawatthourspercubicmeterLazy !== null){
            return this.terawatthourspercubicmeterLazy;
        }
        return this.terawatthourspercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.TerawattHoursPerCubicMeter);
    }

    /** */
    public get PetawattHoursPerCubicMeter(): number {
        if(this.petawatthourspercubicmeterLazy !== null){
            return this.petawatthourspercubicmeterLazy;
        }
        return this.petawatthourspercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.PetawattHoursPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a JoulesPerCubicMeter
     *
     * @param value The unit as JoulesPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromJoulesPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.JoulesPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a WattHoursPerCubicMeter
     *
     * @param value The unit as WattHoursPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromWattHoursPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.WattHoursPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a KilojoulesPerCubicMeter
     *
     * @param value The unit as KilojoulesPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromKilojoulesPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.KilojoulesPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a MegajoulesPerCubicMeter
     *
     * @param value The unit as MegajoulesPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromMegajoulesPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.MegajoulesPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a GigajoulesPerCubicMeter
     *
     * @param value The unit as GigajoulesPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromGigajoulesPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.GigajoulesPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a TerajoulesPerCubicMeter
     *
     * @param value The unit as TerajoulesPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromTerajoulesPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.TerajoulesPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a PetajoulesPerCubicMeter
     *
     * @param value The unit as PetajoulesPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromPetajoulesPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.PetajoulesPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a KilowattHoursPerCubicMeter
     *
     * @param value The unit as KilowattHoursPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromKilowattHoursPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.KilowattHoursPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a MegawattHoursPerCubicMeter
     *
     * @param value The unit as MegawattHoursPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromMegawattHoursPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.MegawattHoursPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a GigawattHoursPerCubicMeter
     *
     * @param value The unit as GigawattHoursPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromGigawattHoursPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.GigawattHoursPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a TerawattHoursPerCubicMeter
     *
     * @param value The unit as TerawattHoursPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromTerawattHoursPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.TerawattHoursPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a PetawattHoursPerCubicMeter
     *
     * @param value The unit as PetawattHoursPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromPetawattHoursPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.PetawattHoursPerCubicMeter);
    }

    /**
     * Convert EnergyDensity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: EnergyDensityUnits): number {
        switch (toUnit) {
            case EnergyDensityUnits.JoulesPerCubicMeter: return this.JoulesPerCubicMeter;
            case EnergyDensityUnits.WattHoursPerCubicMeter: return this.WattHoursPerCubicMeter;
            case EnergyDensityUnits.KilojoulesPerCubicMeter: return this.KilojoulesPerCubicMeter;
            case EnergyDensityUnits.MegajoulesPerCubicMeter: return this.MegajoulesPerCubicMeter;
            case EnergyDensityUnits.GigajoulesPerCubicMeter: return this.GigajoulesPerCubicMeter;
            case EnergyDensityUnits.TerajoulesPerCubicMeter: return this.TerajoulesPerCubicMeter;
            case EnergyDensityUnits.PetajoulesPerCubicMeter: return this.PetajoulesPerCubicMeter;
            case EnergyDensityUnits.KilowattHoursPerCubicMeter: return this.KilowattHoursPerCubicMeter;
            case EnergyDensityUnits.MegawattHoursPerCubicMeter: return this.MegawattHoursPerCubicMeter;
            case EnergyDensityUnits.GigawattHoursPerCubicMeter: return this.GigawattHoursPerCubicMeter;
            case EnergyDensityUnits.TerawattHoursPerCubicMeter: return this.TerawattHoursPerCubicMeter;
            case EnergyDensityUnits.PetawattHoursPerCubicMeter: return this.PetawattHoursPerCubicMeter;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: EnergyDensityUnits): number {
        switch (toUnit) {
                
            case EnergyDensityUnits.JoulesPerCubicMeter:
                return this.value;
            case EnergyDensityUnits.WattHoursPerCubicMeter:
                return this.value / 3.6e+3;
            case EnergyDensityUnits.KilojoulesPerCubicMeter:
                return (this.value) / 1000;
            case EnergyDensityUnits.MegajoulesPerCubicMeter:
                return (this.value) / 1000000;
            case EnergyDensityUnits.GigajoulesPerCubicMeter:
                return (this.value) / 1000000000;
            case EnergyDensityUnits.TerajoulesPerCubicMeter:
                return (this.value) / 1000000000000;
            case EnergyDensityUnits.PetajoulesPerCubicMeter:
                return (this.value) / 1000000000000000;
            case EnergyDensityUnits.KilowattHoursPerCubicMeter:
                return (this.value / 3.6e+3) / 1000;
            case EnergyDensityUnits.MegawattHoursPerCubicMeter:
                return (this.value / 3.6e+3) / 1000000;
            case EnergyDensityUnits.GigawattHoursPerCubicMeter:
                return (this.value / 3.6e+3) / 1000000000;
            case EnergyDensityUnits.TerawattHoursPerCubicMeter:
                return (this.value / 3.6e+3) / 1000000000000;
            case EnergyDensityUnits.PetawattHoursPerCubicMeter:
                return (this.value / 3.6e+3) / 1000000000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: EnergyDensityUnits): number {
        switch (fromUnit) {
                
            case EnergyDensityUnits.JoulesPerCubicMeter:
                return value;
            case EnergyDensityUnits.WattHoursPerCubicMeter:
                return value * 3.6e+3;
            case EnergyDensityUnits.KilojoulesPerCubicMeter:
                return (value) * 1000;
            case EnergyDensityUnits.MegajoulesPerCubicMeter:
                return (value) * 1000000;
            case EnergyDensityUnits.GigajoulesPerCubicMeter:
                return (value) * 1000000000;
            case EnergyDensityUnits.TerajoulesPerCubicMeter:
                return (value) * 1000000000000;
            case EnergyDensityUnits.PetajoulesPerCubicMeter:
                return (value) * 1000000000000000;
            case EnergyDensityUnits.KilowattHoursPerCubicMeter:
                return (value * 3.6e+3) * 1000;
            case EnergyDensityUnits.MegawattHoursPerCubicMeter:
                return (value * 3.6e+3) * 1000000;
            case EnergyDensityUnits.GigawattHoursPerCubicMeter:
                return (value * 3.6e+3) * 1000000000;
            case EnergyDensityUnits.TerawattHoursPerCubicMeter:
                return (value * 3.6e+3) * 1000000000000;
            case EnergyDensityUnits.PetawattHoursPerCubicMeter:
                return (value * 3.6e+3) * 1000000000000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the EnergyDensity to string.
     * Note! the default format for EnergyDensity is JoulesPerCubicMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the EnergyDensity.
     * @returns The string format of the EnergyDensity.
     */
    public toString(unit: EnergyDensityUnits = EnergyDensityUnits.JoulesPerCubicMeter): string {

        switch (unit) {
            
            case EnergyDensityUnits.JoulesPerCubicMeter:
                return this.JoulesPerCubicMeter + ` J/m³`;
            case EnergyDensityUnits.WattHoursPerCubicMeter:
                return this.WattHoursPerCubicMeter + ` Wh/m³`;
            case EnergyDensityUnits.KilojoulesPerCubicMeter:
                return this.KilojoulesPerCubicMeter + ` kJ/m³`;
            case EnergyDensityUnits.MegajoulesPerCubicMeter:
                return this.MegajoulesPerCubicMeter + ` MJ/m³`;
            case EnergyDensityUnits.GigajoulesPerCubicMeter:
                return this.GigajoulesPerCubicMeter + ` GJ/m³`;
            case EnergyDensityUnits.TerajoulesPerCubicMeter:
                return this.TerajoulesPerCubicMeter + ` TJ/m³`;
            case EnergyDensityUnits.PetajoulesPerCubicMeter:
                return this.PetajoulesPerCubicMeter + ` PJ/m³`;
            case EnergyDensityUnits.KilowattHoursPerCubicMeter:
                return this.KilowattHoursPerCubicMeter + ` kWh/m³`;
            case EnergyDensityUnits.MegawattHoursPerCubicMeter:
                return this.MegawattHoursPerCubicMeter + ` MWh/m³`;
            case EnergyDensityUnits.GigawattHoursPerCubicMeter:
                return this.GigawattHoursPerCubicMeter + ` GWh/m³`;
            case EnergyDensityUnits.TerawattHoursPerCubicMeter:
                return this.TerawattHoursPerCubicMeter + ` TWh/m³`;
            case EnergyDensityUnits.PetawattHoursPerCubicMeter:
                return this.PetawattHoursPerCubicMeter + ` PWh/m³`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get EnergyDensity unit abbreviation.
     * Note! the default abbreviation for EnergyDensity is JoulesPerCubicMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the EnergyDensity.
     * @returns The abbreviation string of EnergyDensity.
     */
    public getUnitAbbreviation(unitAbbreviation: EnergyDensityUnits = EnergyDensityUnits.JoulesPerCubicMeter): string {

        switch (unitAbbreviation) {
            
            case EnergyDensityUnits.JoulesPerCubicMeter:
                return `J/m³`;
            case EnergyDensityUnits.WattHoursPerCubicMeter:
                return `Wh/m³`;
            case EnergyDensityUnits.KilojoulesPerCubicMeter:
                return `kJ/m³`;
            case EnergyDensityUnits.MegajoulesPerCubicMeter:
                return `MJ/m³`;
            case EnergyDensityUnits.GigajoulesPerCubicMeter:
                return `GJ/m³`;
            case EnergyDensityUnits.TerajoulesPerCubicMeter:
                return `TJ/m³`;
            case EnergyDensityUnits.PetajoulesPerCubicMeter:
                return `PJ/m³`;
            case EnergyDensityUnits.KilowattHoursPerCubicMeter:
                return `kWh/m³`;
            case EnergyDensityUnits.MegawattHoursPerCubicMeter:
                return `MWh/m³`;
            case EnergyDensityUnits.GigawattHoursPerCubicMeter:
                return `GWh/m³`;
            case EnergyDensityUnits.TerawattHoursPerCubicMeter:
                return `TWh/m³`;
            case EnergyDensityUnits.PetawattHoursPerCubicMeter:
                return `PWh/m³`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given EnergyDensity are equals to the current EnergyDensity.
     * @param energyDensity The other EnergyDensity.
     * @returns True if the given EnergyDensity are equal to the current EnergyDensity.
     */
    public equals(energyDensity: EnergyDensity): boolean {
        return this.value === energyDensity.BaseValue;
    }

    /**
     * Compare the given EnergyDensity against the current EnergyDensity.
     * @param energyDensity The other EnergyDensity.
     * @returns 0 if they are equal, -1 if the current EnergyDensity is less then other, 1 if the current EnergyDensity is greater then other.
     */
    public compareTo(energyDensity: EnergyDensity): number {

        if (this.value > energyDensity.BaseValue)
            return 1;
        if (this.value < energyDensity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given EnergyDensity with the current EnergyDensity.
     * @param energyDensity The other EnergyDensity.
     * @returns A new EnergyDensity instance with the results.
     */
    public add(energyDensity: EnergyDensity): EnergyDensity {
        return new EnergyDensity(this.value + energyDensity.BaseValue)
    }

    /**
     * Subtract the given EnergyDensity with the current EnergyDensity.
     * @param energyDensity The other EnergyDensity.
     * @returns A new EnergyDensity instance with the results.
     */
    public subtract(energyDensity: EnergyDensity): EnergyDensity {
        return new EnergyDensity(this.value - energyDensity.BaseValue)
    }

    /**
     * Multiply the given EnergyDensity with the current EnergyDensity.
     * @param energyDensity The other EnergyDensity.
     * @returns A new EnergyDensity instance with the results.
     */
    public multiply(energyDensity: EnergyDensity): EnergyDensity {
        return new EnergyDensity(this.value * energyDensity.BaseValue)
    }

    /**
     * Divide the given EnergyDensity with the current EnergyDensity.
     * @param energyDensity The other EnergyDensity.
     * @returns A new EnergyDensity instance with the results.
     */
    public divide(energyDensity: EnergyDensity): EnergyDensity {
        return new EnergyDensity(this.value / energyDensity.BaseValue)
    }

    /**
     * Modulo the given EnergyDensity with the current EnergyDensity.
     * @param energyDensity The other EnergyDensity.
     * @returns A new EnergyDensity instance with the results.
     */
    public modulo(energyDensity: EnergyDensity): EnergyDensity {
        return new EnergyDensity(this.value % energyDensity.BaseValue)
    }

    /**
     * Pow the given EnergyDensity with the current EnergyDensity.
     * @param energyDensity The other EnergyDensity.
     * @returns A new EnergyDensity instance with the results.
     */
    public pow(energyDensity: EnergyDensity): EnergyDensity {
        return new EnergyDensity(this.value ** energyDensity.BaseValue)
    }
}
