/** RadioactivityUnits enumeration */
export enum RadioactivityUnits {
    /** Activity of a quantity of radioactive material in which one nucleus decays per second. */
    Becquerels,
    /** */
    Curies,
    /** Activity of a quantity of radioactive material in which one million nuclei decay per second. */
    Rutherfords,
    /** */
    Picobecquerels,
    /** */
    Nanobecquerels,
    /** */
    Microbecquerels,
    /** */
    Millibecquerels,
    /** */
    Kilobecquerels,
    /** */
    Megabecquerels,
    /** */
    Gigabecquerels,
    /** */
    Terabecquerels,
    /** */
    Petabecquerels,
    /** */
    Exabecquerels,
    /** */
    Picocuries,
    /** */
    Nanocuries,
    /** */
    Microcuries,
    /** */
    Millicuries,
    /** */
    Kilocuries,
    /** */
    Megacuries,
    /** */
    Gigacuries,
    /** */
    Teracuries,
    /** */
    Picorutherfords,
    /** */
    Nanorutherfords,
    /** */
    Microrutherfords,
    /** */
    Millirutherfords,
    /** */
    Kilorutherfords,
    /** */
    Megarutherfords,
    /** */
    Gigarutherfords,
    /** */
    Terarutherfords
}

/** Amount of ionizing radiation released when an element spontaneously emits energy as a result of the radioactive decay of an unstable atom per unit time. */
export class Radioactivity {
    private value: number;
    private becquerelsLazy: number | null = null;
    private curiesLazy: number | null = null;
    private rutherfordsLazy: number | null = null;
    private picobecquerelsLazy: number | null = null;
    private nanobecquerelsLazy: number | null = null;
    private microbecquerelsLazy: number | null = null;
    private millibecquerelsLazy: number | null = null;
    private kilobecquerelsLazy: number | null = null;
    private megabecquerelsLazy: number | null = null;
    private gigabecquerelsLazy: number | null = null;
    private terabecquerelsLazy: number | null = null;
    private petabecquerelsLazy: number | null = null;
    private exabecquerelsLazy: number | null = null;
    private picocuriesLazy: number | null = null;
    private nanocuriesLazy: number | null = null;
    private microcuriesLazy: number | null = null;
    private millicuriesLazy: number | null = null;
    private kilocuriesLazy: number | null = null;
    private megacuriesLazy: number | null = null;
    private gigacuriesLazy: number | null = null;
    private teracuriesLazy: number | null = null;
    private picorutherfordsLazy: number | null = null;
    private nanorutherfordsLazy: number | null = null;
    private microrutherfordsLazy: number | null = null;
    private millirutherfordsLazy: number | null = null;
    private kilorutherfordsLazy: number | null = null;
    private megarutherfordsLazy: number | null = null;
    private gigarutherfordsLazy: number | null = null;
    private terarutherfordsLazy: number | null = null;

    /**
     * Create a new Radioactivity.
     * @param value The value.
     * @param fromUnit The ‘Radioactivity’ unit to create from.
     * The default unit is Becquerels
     */
    public constructor(value: number, fromUnit: RadioactivityUnits = RadioactivityUnits.Becquerels) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Radioactivity is Becquerels.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Activity of a quantity of radioactive material in which one nucleus decays per second. */
    public get Becquerels(): number {
        if(this.becquerelsLazy !== null){
            return this.becquerelsLazy;
        }
        return this.becquerelsLazy = this.convertFromBase(RadioactivityUnits.Becquerels);
    }

    /** */
    public get Curies(): number {
        if(this.curiesLazy !== null){
            return this.curiesLazy;
        }
        return this.curiesLazy = this.convertFromBase(RadioactivityUnits.Curies);
    }

    /** Activity of a quantity of radioactive material in which one million nuclei decay per second. */
    public get Rutherfords(): number {
        if(this.rutherfordsLazy !== null){
            return this.rutherfordsLazy;
        }
        return this.rutherfordsLazy = this.convertFromBase(RadioactivityUnits.Rutherfords);
    }

    /** */
    public get Picobecquerels(): number {
        if(this.picobecquerelsLazy !== null){
            return this.picobecquerelsLazy;
        }
        return this.picobecquerelsLazy = this.convertFromBase(RadioactivityUnits.Picobecquerels);
    }

    /** */
    public get Nanobecquerels(): number {
        if(this.nanobecquerelsLazy !== null){
            return this.nanobecquerelsLazy;
        }
        return this.nanobecquerelsLazy = this.convertFromBase(RadioactivityUnits.Nanobecquerels);
    }

    /** */
    public get Microbecquerels(): number {
        if(this.microbecquerelsLazy !== null){
            return this.microbecquerelsLazy;
        }
        return this.microbecquerelsLazy = this.convertFromBase(RadioactivityUnits.Microbecquerels);
    }

    /** */
    public get Millibecquerels(): number {
        if(this.millibecquerelsLazy !== null){
            return this.millibecquerelsLazy;
        }
        return this.millibecquerelsLazy = this.convertFromBase(RadioactivityUnits.Millibecquerels);
    }

    /** */
    public get Kilobecquerels(): number {
        if(this.kilobecquerelsLazy !== null){
            return this.kilobecquerelsLazy;
        }
        return this.kilobecquerelsLazy = this.convertFromBase(RadioactivityUnits.Kilobecquerels);
    }

    /** */
    public get Megabecquerels(): number {
        if(this.megabecquerelsLazy !== null){
            return this.megabecquerelsLazy;
        }
        return this.megabecquerelsLazy = this.convertFromBase(RadioactivityUnits.Megabecquerels);
    }

    /** */
    public get Gigabecquerels(): number {
        if(this.gigabecquerelsLazy !== null){
            return this.gigabecquerelsLazy;
        }
        return this.gigabecquerelsLazy = this.convertFromBase(RadioactivityUnits.Gigabecquerels);
    }

    /** */
    public get Terabecquerels(): number {
        if(this.terabecquerelsLazy !== null){
            return this.terabecquerelsLazy;
        }
        return this.terabecquerelsLazy = this.convertFromBase(RadioactivityUnits.Terabecquerels);
    }

    /** */
    public get Petabecquerels(): number {
        if(this.petabecquerelsLazy !== null){
            return this.petabecquerelsLazy;
        }
        return this.petabecquerelsLazy = this.convertFromBase(RadioactivityUnits.Petabecquerels);
    }

    /** */
    public get Exabecquerels(): number {
        if(this.exabecquerelsLazy !== null){
            return this.exabecquerelsLazy;
        }
        return this.exabecquerelsLazy = this.convertFromBase(RadioactivityUnits.Exabecquerels);
    }

    /** */
    public get Picocuries(): number {
        if(this.picocuriesLazy !== null){
            return this.picocuriesLazy;
        }
        return this.picocuriesLazy = this.convertFromBase(RadioactivityUnits.Picocuries);
    }

    /** */
    public get Nanocuries(): number {
        if(this.nanocuriesLazy !== null){
            return this.nanocuriesLazy;
        }
        return this.nanocuriesLazy = this.convertFromBase(RadioactivityUnits.Nanocuries);
    }

    /** */
    public get Microcuries(): number {
        if(this.microcuriesLazy !== null){
            return this.microcuriesLazy;
        }
        return this.microcuriesLazy = this.convertFromBase(RadioactivityUnits.Microcuries);
    }

    /** */
    public get Millicuries(): number {
        if(this.millicuriesLazy !== null){
            return this.millicuriesLazy;
        }
        return this.millicuriesLazy = this.convertFromBase(RadioactivityUnits.Millicuries);
    }

    /** */
    public get Kilocuries(): number {
        if(this.kilocuriesLazy !== null){
            return this.kilocuriesLazy;
        }
        return this.kilocuriesLazy = this.convertFromBase(RadioactivityUnits.Kilocuries);
    }

    /** */
    public get Megacuries(): number {
        if(this.megacuriesLazy !== null){
            return this.megacuriesLazy;
        }
        return this.megacuriesLazy = this.convertFromBase(RadioactivityUnits.Megacuries);
    }

    /** */
    public get Gigacuries(): number {
        if(this.gigacuriesLazy !== null){
            return this.gigacuriesLazy;
        }
        return this.gigacuriesLazy = this.convertFromBase(RadioactivityUnits.Gigacuries);
    }

    /** */
    public get Teracuries(): number {
        if(this.teracuriesLazy !== null){
            return this.teracuriesLazy;
        }
        return this.teracuriesLazy = this.convertFromBase(RadioactivityUnits.Teracuries);
    }

    /** */
    public get Picorutherfords(): number {
        if(this.picorutherfordsLazy !== null){
            return this.picorutherfordsLazy;
        }
        return this.picorutherfordsLazy = this.convertFromBase(RadioactivityUnits.Picorutherfords);
    }

    /** */
    public get Nanorutherfords(): number {
        if(this.nanorutherfordsLazy !== null){
            return this.nanorutherfordsLazy;
        }
        return this.nanorutherfordsLazy = this.convertFromBase(RadioactivityUnits.Nanorutherfords);
    }

    /** */
    public get Microrutherfords(): number {
        if(this.microrutherfordsLazy !== null){
            return this.microrutherfordsLazy;
        }
        return this.microrutherfordsLazy = this.convertFromBase(RadioactivityUnits.Microrutherfords);
    }

    /** */
    public get Millirutherfords(): number {
        if(this.millirutherfordsLazy !== null){
            return this.millirutherfordsLazy;
        }
        return this.millirutherfordsLazy = this.convertFromBase(RadioactivityUnits.Millirutherfords);
    }

    /** */
    public get Kilorutherfords(): number {
        if(this.kilorutherfordsLazy !== null){
            return this.kilorutherfordsLazy;
        }
        return this.kilorutherfordsLazy = this.convertFromBase(RadioactivityUnits.Kilorutherfords);
    }

    /** */
    public get Megarutherfords(): number {
        if(this.megarutherfordsLazy !== null){
            return this.megarutherfordsLazy;
        }
        return this.megarutherfordsLazy = this.convertFromBase(RadioactivityUnits.Megarutherfords);
    }

    /** */
    public get Gigarutherfords(): number {
        if(this.gigarutherfordsLazy !== null){
            return this.gigarutherfordsLazy;
        }
        return this.gigarutherfordsLazy = this.convertFromBase(RadioactivityUnits.Gigarutherfords);
    }

    /** */
    public get Terarutherfords(): number {
        if(this.terarutherfordsLazy !== null){
            return this.terarutherfordsLazy;
        }
        return this.terarutherfordsLazy = this.convertFromBase(RadioactivityUnits.Terarutherfords);
    }

    /**
     * Create a new Radioactivity instance from a Becquerels
     * Activity of a quantity of radioactive material in which one nucleus decays per second.
     * @param value The unit as Becquerels to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromBecquerels(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Becquerels);
    }

    /**
     * Create a new Radioactivity instance from a Curies
     *
     * @param value The unit as Curies to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromCuries(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Curies);
    }

    /**
     * Create a new Radioactivity instance from a Rutherfords
     * Activity of a quantity of radioactive material in which one million nuclei decay per second.
     * @param value The unit as Rutherfords to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromRutherfords(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Rutherfords);
    }

    /**
     * Create a new Radioactivity instance from a Picobecquerels
     *
     * @param value The unit as Picobecquerels to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromPicobecquerels(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Picobecquerels);
    }

    /**
     * Create a new Radioactivity instance from a Nanobecquerels
     *
     * @param value The unit as Nanobecquerels to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromNanobecquerels(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Nanobecquerels);
    }

    /**
     * Create a new Radioactivity instance from a Microbecquerels
     *
     * @param value The unit as Microbecquerels to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromMicrobecquerels(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Microbecquerels);
    }

    /**
     * Create a new Radioactivity instance from a Millibecquerels
     *
     * @param value The unit as Millibecquerels to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromMillibecquerels(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Millibecquerels);
    }

    /**
     * Create a new Radioactivity instance from a Kilobecquerels
     *
     * @param value The unit as Kilobecquerels to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromKilobecquerels(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Kilobecquerels);
    }

    /**
     * Create a new Radioactivity instance from a Megabecquerels
     *
     * @param value The unit as Megabecquerels to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromMegabecquerels(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Megabecquerels);
    }

    /**
     * Create a new Radioactivity instance from a Gigabecquerels
     *
     * @param value The unit as Gigabecquerels to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromGigabecquerels(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Gigabecquerels);
    }

    /**
     * Create a new Radioactivity instance from a Terabecquerels
     *
     * @param value The unit as Terabecquerels to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromTerabecquerels(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Terabecquerels);
    }

    /**
     * Create a new Radioactivity instance from a Petabecquerels
     *
     * @param value The unit as Petabecquerels to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromPetabecquerels(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Petabecquerels);
    }

    /**
     * Create a new Radioactivity instance from a Exabecquerels
     *
     * @param value The unit as Exabecquerels to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromExabecquerels(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Exabecquerels);
    }

    /**
     * Create a new Radioactivity instance from a Picocuries
     *
     * @param value The unit as Picocuries to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromPicocuries(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Picocuries);
    }

    /**
     * Create a new Radioactivity instance from a Nanocuries
     *
     * @param value The unit as Nanocuries to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromNanocuries(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Nanocuries);
    }

    /**
     * Create a new Radioactivity instance from a Microcuries
     *
     * @param value The unit as Microcuries to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromMicrocuries(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Microcuries);
    }

    /**
     * Create a new Radioactivity instance from a Millicuries
     *
     * @param value The unit as Millicuries to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromMillicuries(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Millicuries);
    }

    /**
     * Create a new Radioactivity instance from a Kilocuries
     *
     * @param value The unit as Kilocuries to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromKilocuries(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Kilocuries);
    }

    /**
     * Create a new Radioactivity instance from a Megacuries
     *
     * @param value The unit as Megacuries to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromMegacuries(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Megacuries);
    }

    /**
     * Create a new Radioactivity instance from a Gigacuries
     *
     * @param value The unit as Gigacuries to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromGigacuries(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Gigacuries);
    }

    /**
     * Create a new Radioactivity instance from a Teracuries
     *
     * @param value The unit as Teracuries to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromTeracuries(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Teracuries);
    }

    /**
     * Create a new Radioactivity instance from a Picorutherfords
     *
     * @param value The unit as Picorutherfords to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromPicorutherfords(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Picorutherfords);
    }

    /**
     * Create a new Radioactivity instance from a Nanorutherfords
     *
     * @param value The unit as Nanorutherfords to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromNanorutherfords(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Nanorutherfords);
    }

    /**
     * Create a new Radioactivity instance from a Microrutherfords
     *
     * @param value The unit as Microrutherfords to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromMicrorutherfords(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Microrutherfords);
    }

    /**
     * Create a new Radioactivity instance from a Millirutherfords
     *
     * @param value The unit as Millirutherfords to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromMillirutherfords(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Millirutherfords);
    }

    /**
     * Create a new Radioactivity instance from a Kilorutherfords
     *
     * @param value The unit as Kilorutherfords to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromKilorutherfords(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Kilorutherfords);
    }

    /**
     * Create a new Radioactivity instance from a Megarutherfords
     *
     * @param value The unit as Megarutherfords to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromMegarutherfords(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Megarutherfords);
    }

    /**
     * Create a new Radioactivity instance from a Gigarutherfords
     *
     * @param value The unit as Gigarutherfords to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromGigarutherfords(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Gigarutherfords);
    }

    /**
     * Create a new Radioactivity instance from a Terarutherfords
     *
     * @param value The unit as Terarutherfords to create a new Radioactivity from.
     * @returns The new Radioactivity instance.
     */
    public static FromTerarutherfords(value: number): Radioactivity {
        return new Radioactivity(value, RadioactivityUnits.Terarutherfords);
    }

    /**
     * Convert Radioactivity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: RadioactivityUnits): number {
        switch (toUnit) {
            case RadioactivityUnits.Becquerels: return this.Becquerels;
            case RadioactivityUnits.Curies: return this.Curies;
            case RadioactivityUnits.Rutherfords: return this.Rutherfords;
            case RadioactivityUnits.Picobecquerels: return this.Picobecquerels;
            case RadioactivityUnits.Nanobecquerels: return this.Nanobecquerels;
            case RadioactivityUnits.Microbecquerels: return this.Microbecquerels;
            case RadioactivityUnits.Millibecquerels: return this.Millibecquerels;
            case RadioactivityUnits.Kilobecquerels: return this.Kilobecquerels;
            case RadioactivityUnits.Megabecquerels: return this.Megabecquerels;
            case RadioactivityUnits.Gigabecquerels: return this.Gigabecquerels;
            case RadioactivityUnits.Terabecquerels: return this.Terabecquerels;
            case RadioactivityUnits.Petabecquerels: return this.Petabecquerels;
            case RadioactivityUnits.Exabecquerels: return this.Exabecquerels;
            case RadioactivityUnits.Picocuries: return this.Picocuries;
            case RadioactivityUnits.Nanocuries: return this.Nanocuries;
            case RadioactivityUnits.Microcuries: return this.Microcuries;
            case RadioactivityUnits.Millicuries: return this.Millicuries;
            case RadioactivityUnits.Kilocuries: return this.Kilocuries;
            case RadioactivityUnits.Megacuries: return this.Megacuries;
            case RadioactivityUnits.Gigacuries: return this.Gigacuries;
            case RadioactivityUnits.Teracuries: return this.Teracuries;
            case RadioactivityUnits.Picorutherfords: return this.Picorutherfords;
            case RadioactivityUnits.Nanorutherfords: return this.Nanorutherfords;
            case RadioactivityUnits.Microrutherfords: return this.Microrutherfords;
            case RadioactivityUnits.Millirutherfords: return this.Millirutherfords;
            case RadioactivityUnits.Kilorutherfords: return this.Kilorutherfords;
            case RadioactivityUnits.Megarutherfords: return this.Megarutherfords;
            case RadioactivityUnits.Gigarutherfords: return this.Gigarutherfords;
            case RadioactivityUnits.Terarutherfords: return this.Terarutherfords;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: RadioactivityUnits): number {
        switch (toUnit) {
                
            case RadioactivityUnits.Becquerels:
                return this.value;
            case RadioactivityUnits.Curies:
                return this.value / 3.7e10;
            case RadioactivityUnits.Rutherfords:
                return this.value / 1e6;
            case RadioactivityUnits.Picobecquerels:
                return (this.value) / 1e-12;
            case RadioactivityUnits.Nanobecquerels:
                return (this.value) / 1e-9;
            case RadioactivityUnits.Microbecquerels:
                return (this.value) / 0.000001;
            case RadioactivityUnits.Millibecquerels:
                return (this.value) / 0.001;
            case RadioactivityUnits.Kilobecquerels:
                return (this.value) / 1000;
            case RadioactivityUnits.Megabecquerels:
                return (this.value) / 1000000;
            case RadioactivityUnits.Gigabecquerels:
                return (this.value) / 1000000000;
            case RadioactivityUnits.Terabecquerels:
                return (this.value) / 1000000000000;
            case RadioactivityUnits.Petabecquerels:
                return (this.value) / 1000000000000000;
            case RadioactivityUnits.Exabecquerels:
                return (this.value) / 1000000000000000000;
            case RadioactivityUnits.Picocuries:
                return (this.value / 3.7e10) / 1e-12;
            case RadioactivityUnits.Nanocuries:
                return (this.value / 3.7e10) / 1e-9;
            case RadioactivityUnits.Microcuries:
                return (this.value / 3.7e10) / 0.000001;
            case RadioactivityUnits.Millicuries:
                return (this.value / 3.7e10) / 0.001;
            case RadioactivityUnits.Kilocuries:
                return (this.value / 3.7e10) / 1000;
            case RadioactivityUnits.Megacuries:
                return (this.value / 3.7e10) / 1000000;
            case RadioactivityUnits.Gigacuries:
                return (this.value / 3.7e10) / 1000000000;
            case RadioactivityUnits.Teracuries:
                return (this.value / 3.7e10) / 1000000000000;
            case RadioactivityUnits.Picorutherfords:
                return (this.value / 1e6) / 1e-12;
            case RadioactivityUnits.Nanorutherfords:
                return (this.value / 1e6) / 1e-9;
            case RadioactivityUnits.Microrutherfords:
                return (this.value / 1e6) / 0.000001;
            case RadioactivityUnits.Millirutherfords:
                return (this.value / 1e6) / 0.001;
            case RadioactivityUnits.Kilorutherfords:
                return (this.value / 1e6) / 1000;
            case RadioactivityUnits.Megarutherfords:
                return (this.value / 1e6) / 1000000;
            case RadioactivityUnits.Gigarutherfords:
                return (this.value / 1e6) / 1000000000;
            case RadioactivityUnits.Terarutherfords:
                return (this.value / 1e6) / 1000000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: RadioactivityUnits): number {
        switch (fromUnit) {
                
            case RadioactivityUnits.Becquerels:
                return value;
            case RadioactivityUnits.Curies:
                return value * 3.7e10;
            case RadioactivityUnits.Rutherfords:
                return value * 1e6;
            case RadioactivityUnits.Picobecquerels:
                return (value) * 1e-12;
            case RadioactivityUnits.Nanobecquerels:
                return (value) * 1e-9;
            case RadioactivityUnits.Microbecquerels:
                return (value) * 0.000001;
            case RadioactivityUnits.Millibecquerels:
                return (value) * 0.001;
            case RadioactivityUnits.Kilobecquerels:
                return (value) * 1000;
            case RadioactivityUnits.Megabecquerels:
                return (value) * 1000000;
            case RadioactivityUnits.Gigabecquerels:
                return (value) * 1000000000;
            case RadioactivityUnits.Terabecquerels:
                return (value) * 1000000000000;
            case RadioactivityUnits.Petabecquerels:
                return (value) * 1000000000000000;
            case RadioactivityUnits.Exabecquerels:
                return (value) * 1000000000000000000;
            case RadioactivityUnits.Picocuries:
                return (value * 3.7e10) * 1e-12;
            case RadioactivityUnits.Nanocuries:
                return (value * 3.7e10) * 1e-9;
            case RadioactivityUnits.Microcuries:
                return (value * 3.7e10) * 0.000001;
            case RadioactivityUnits.Millicuries:
                return (value * 3.7e10) * 0.001;
            case RadioactivityUnits.Kilocuries:
                return (value * 3.7e10) * 1000;
            case RadioactivityUnits.Megacuries:
                return (value * 3.7e10) * 1000000;
            case RadioactivityUnits.Gigacuries:
                return (value * 3.7e10) * 1000000000;
            case RadioactivityUnits.Teracuries:
                return (value * 3.7e10) * 1000000000000;
            case RadioactivityUnits.Picorutherfords:
                return (value * 1e6) * 1e-12;
            case RadioactivityUnits.Nanorutherfords:
                return (value * 1e6) * 1e-9;
            case RadioactivityUnits.Microrutherfords:
                return (value * 1e6) * 0.000001;
            case RadioactivityUnits.Millirutherfords:
                return (value * 1e6) * 0.001;
            case RadioactivityUnits.Kilorutherfords:
                return (value * 1e6) * 1000;
            case RadioactivityUnits.Megarutherfords:
                return (value * 1e6) * 1000000;
            case RadioactivityUnits.Gigarutherfords:
                return (value * 1e6) * 1000000000;
            case RadioactivityUnits.Terarutherfords:
                return (value * 1e6) * 1000000000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Radioactivity to string.
     * Note! the default format for Radioactivity is Becquerels.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Radioactivity.
     * @returns The string format of the Radioactivity.
     */
    public toString(unit: RadioactivityUnits = RadioactivityUnits.Becquerels): string {

        switch (unit) {
            
            case RadioactivityUnits.Becquerels:
                return this.Becquerels + ` Bq`;
            case RadioactivityUnits.Curies:
                return this.Curies + ` Ci`;
            case RadioactivityUnits.Rutherfords:
                return this.Rutherfords + ` Rd`;
            case RadioactivityUnits.Picobecquerels:
                return this.Picobecquerels + ` pBq`;
            case RadioactivityUnits.Nanobecquerels:
                return this.Nanobecquerels + ` nBq`;
            case RadioactivityUnits.Microbecquerels:
                return this.Microbecquerels + ` μBq`;
            case RadioactivityUnits.Millibecquerels:
                return this.Millibecquerels + ` mBq`;
            case RadioactivityUnits.Kilobecquerels:
                return this.Kilobecquerels + ` kBq`;
            case RadioactivityUnits.Megabecquerels:
                return this.Megabecquerels + ` MBq`;
            case RadioactivityUnits.Gigabecquerels:
                return this.Gigabecquerels + ` GBq`;
            case RadioactivityUnits.Terabecquerels:
                return this.Terabecquerels + ` TBq`;
            case RadioactivityUnits.Petabecquerels:
                return this.Petabecquerels + ` PBq`;
            case RadioactivityUnits.Exabecquerels:
                return this.Exabecquerels + ` EBq`;
            case RadioactivityUnits.Picocuries:
                return this.Picocuries + ` pCi`;
            case RadioactivityUnits.Nanocuries:
                return this.Nanocuries + ` nCi`;
            case RadioactivityUnits.Microcuries:
                return this.Microcuries + ` μCi`;
            case RadioactivityUnits.Millicuries:
                return this.Millicuries + ` mCi`;
            case RadioactivityUnits.Kilocuries:
                return this.Kilocuries + ` kCi`;
            case RadioactivityUnits.Megacuries:
                return this.Megacuries + ` MCi`;
            case RadioactivityUnits.Gigacuries:
                return this.Gigacuries + ` GCi`;
            case RadioactivityUnits.Teracuries:
                return this.Teracuries + ` TCi`;
            case RadioactivityUnits.Picorutherfords:
                return this.Picorutherfords + ` pRd`;
            case RadioactivityUnits.Nanorutherfords:
                return this.Nanorutherfords + ` nRd`;
            case RadioactivityUnits.Microrutherfords:
                return this.Microrutherfords + ` μRd`;
            case RadioactivityUnits.Millirutherfords:
                return this.Millirutherfords + ` mRd`;
            case RadioactivityUnits.Kilorutherfords:
                return this.Kilorutherfords + ` kRd`;
            case RadioactivityUnits.Megarutherfords:
                return this.Megarutherfords + ` MRd`;
            case RadioactivityUnits.Gigarutherfords:
                return this.Gigarutherfords + ` GRd`;
            case RadioactivityUnits.Terarutherfords:
                return this.Terarutherfords + ` TRd`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Radioactivity unit abbreviation.
     * Note! the default abbreviation for Radioactivity is Becquerels.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Radioactivity.
     * @returns The abbreviation string of Radioactivity.
     */
    public getUnitAbbreviation(unitAbbreviation: RadioactivityUnits = RadioactivityUnits.Becquerels): string {

        switch (unitAbbreviation) {
            
            case RadioactivityUnits.Becquerels:
                return `Bq`;
            case RadioactivityUnits.Curies:
                return `Ci`;
            case RadioactivityUnits.Rutherfords:
                return `Rd`;
            case RadioactivityUnits.Picobecquerels:
                return `pBq`;
            case RadioactivityUnits.Nanobecquerels:
                return `nBq`;
            case RadioactivityUnits.Microbecquerels:
                return `μBq`;
            case RadioactivityUnits.Millibecquerels:
                return `mBq`;
            case RadioactivityUnits.Kilobecquerels:
                return `kBq`;
            case RadioactivityUnits.Megabecquerels:
                return `MBq`;
            case RadioactivityUnits.Gigabecquerels:
                return `GBq`;
            case RadioactivityUnits.Terabecquerels:
                return `TBq`;
            case RadioactivityUnits.Petabecquerels:
                return `PBq`;
            case RadioactivityUnits.Exabecquerels:
                return `EBq`;
            case RadioactivityUnits.Picocuries:
                return `pCi`;
            case RadioactivityUnits.Nanocuries:
                return `nCi`;
            case RadioactivityUnits.Microcuries:
                return `μCi`;
            case RadioactivityUnits.Millicuries:
                return `mCi`;
            case RadioactivityUnits.Kilocuries:
                return `kCi`;
            case RadioactivityUnits.Megacuries:
                return `MCi`;
            case RadioactivityUnits.Gigacuries:
                return `GCi`;
            case RadioactivityUnits.Teracuries:
                return `TCi`;
            case RadioactivityUnits.Picorutherfords:
                return `pRd`;
            case RadioactivityUnits.Nanorutherfords:
                return `nRd`;
            case RadioactivityUnits.Microrutherfords:
                return `μRd`;
            case RadioactivityUnits.Millirutherfords:
                return `mRd`;
            case RadioactivityUnits.Kilorutherfords:
                return `kRd`;
            case RadioactivityUnits.Megarutherfords:
                return `MRd`;
            case RadioactivityUnits.Gigarutherfords:
                return `GRd`;
            case RadioactivityUnits.Terarutherfords:
                return `TRd`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Radioactivity are equals to the current Radioactivity.
     * @param radioactivity The other Radioactivity.
     * @returns True if the given Radioactivity are equal to the current Radioactivity.
     */
    public equals(radioactivity: Radioactivity): boolean {
        return this.value === radioactivity.BaseValue;
    }

    /**
     * Compare the given Radioactivity against the current Radioactivity.
     * @param radioactivity The other Radioactivity.
     * @returns 0 if they are equal, -1 if the current Radioactivity is less then other, 1 if the current Radioactivity is greater then other.
     */
    public compareTo(radioactivity: Radioactivity): number {

        if (this.value > radioactivity.BaseValue)
            return 1;
        if (this.value < radioactivity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Radioactivity with the current Radioactivity.
     * @param radioactivity The other Radioactivity.
     * @returns A new Radioactivity instance with the results.
     */
    public add(radioactivity: Radioactivity): Radioactivity {
        return new Radioactivity(this.value + radioactivity.BaseValue)
    }

    /**
     * Subtract the given Radioactivity with the current Radioactivity.
     * @param radioactivity The other Radioactivity.
     * @returns A new Radioactivity instance with the results.
     */
    public subtract(radioactivity: Radioactivity): Radioactivity {
        return new Radioactivity(this.value - radioactivity.BaseValue)
    }

    /**
     * Multiply the given Radioactivity with the current Radioactivity.
     * @param radioactivity The other Radioactivity.
     * @returns A new Radioactivity instance with the results.
     */
    public multiply(radioactivity: Radioactivity): Radioactivity {
        return new Radioactivity(this.value * radioactivity.BaseValue)
    }

    /**
     * Divide the given Radioactivity with the current Radioactivity.
     * @param radioactivity The other Radioactivity.
     * @returns A new Radioactivity instance with the results.
     */
    public divide(radioactivity: Radioactivity): Radioactivity {
        return new Radioactivity(this.value / radioactivity.BaseValue)
    }

    /**
     * Modulo the given Radioactivity with the current Radioactivity.
     * @param radioactivity The other Radioactivity.
     * @returns A new Radioactivity instance with the results.
     */
    public modulo(radioactivity: Radioactivity): Radioactivity {
        return new Radioactivity(this.value % radioactivity.BaseValue)
    }

    /**
     * Pow the given Radioactivity with the current Radioactivity.
     * @param radioactivity The other Radioactivity.
     * @returns A new Radioactivity instance with the results.
     */
    public pow(radioactivity: Radioactivity): Radioactivity {
        return new Radioactivity(this.value ** radioactivity.BaseValue)
    }
}
