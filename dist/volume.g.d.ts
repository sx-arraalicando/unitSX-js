export declare enum VolumeUnits {
    Liters = 0,
    CubicMeters = 1,
    CubicKilometers = 2,
    CubicHectometers = 3,
    CubicDecimeters = 4,
    CubicCentimeters = 5,
    CubicMillimeters = 6,
    CubicMicrometers = 7,
    CubicMiles = 8,
    CubicYards = 9,
    CubicFeet = 10,
    CubicInches = 11,
    ImperialGallons = 12,
    ImperialOunces = 13,
    UsGallons = 14,
    UsOunces = 15,
    UsTablespoons = 16,
    AuTablespoons = 17,
    UkTablespoons = 18,
    MetricTeaspoons = 19,
    UsTeaspoons = 20,
    MetricCups = 21,
    UsCustomaryCups = 22,
    UsLegalCups = 23,
    OilBarrels = 24,
    UsBeerBarrels = 25,
    ImperialBeerBarrels = 26,
    UsQuarts = 27,
    UsPints = 28,
    AcreFeet = 29,
    ImperialPints = 30,
    Microliters = 31,
    Centiliters = 32,
    Deciliters = 33,
    Hectoliters = 34,
    Kiloliters = 35,
    Megaliters = 36,
    Hectocubicmeters = 37,
    Kilocubicmeters = 38,
    Hectocubicfeet = 39,
    Kilocubicfeet = 40,
    Megacubicfeet = 41,
    Kiloimperialgallons = 42,
    Megaimperialgallons = 43,
    Kilousgallons = 44,
    Megausgallons = 45
}
export declare class Volume {
    private value;
    constructor(value: number, fromUnit: VolumeUnits);
    get Liters(): number;
    get CubicMeters(): number;
    get CubicKilometers(): number;
    get CubicHectometers(): number;
    get CubicDecimeters(): number;
    get CubicCentimeters(): number;
    get CubicMillimeters(): number;
    get CubicMicrometers(): number;
    get CubicMiles(): number;
    get CubicYards(): number;
    get CubicFeet(): number;
    get CubicInches(): number;
    get ImperialGallons(): number;
    get ImperialOunces(): number;
    get UsGallons(): number;
    get UsOunces(): number;
    get UsTablespoons(): number;
    get AuTablespoons(): number;
    get UkTablespoons(): number;
    get MetricTeaspoons(): number;
    get UsTeaspoons(): number;
    get MetricCups(): number;
    get UsCustomaryCups(): number;
    get UsLegalCups(): number;
    get OilBarrels(): number;
    get UsBeerBarrels(): number;
    get ImperialBeerBarrels(): number;
    get UsQuarts(): number;
    get UsPints(): number;
    get AcreFeet(): number;
    get ImperialPints(): number;
    get Microliters(): number;
    get Centiliters(): number;
    get Deciliters(): number;
    get Hectoliters(): number;
    get Kiloliters(): number;
    get Megaliters(): number;
    get Hectocubicmeters(): number;
    get Kilocubicmeters(): number;
    get Hectocubicfeet(): number;
    get Kilocubicfeet(): number;
    get Megacubicfeet(): number;
    get Kiloimperialgallons(): number;
    get Megaimperialgallons(): number;
    get Kilousgallons(): number;
    get Megausgallons(): number;
    static FromLiters(value: number): Volume;
    static FromCubicMeters(value: number): Volume;
    static FromCubicKilometers(value: number): Volume;
    static FromCubicHectometers(value: number): Volume;
    static FromCubicDecimeters(value: number): Volume;
    static FromCubicCentimeters(value: number): Volume;
    static FromCubicMillimeters(value: number): Volume;
    static FromCubicMicrometers(value: number): Volume;
    static FromCubicMiles(value: number): Volume;
    static FromCubicYards(value: number): Volume;
    static FromCubicFeet(value: number): Volume;
    static FromCubicInches(value: number): Volume;
    static FromImperialGallons(value: number): Volume;
    static FromImperialOunces(value: number): Volume;
    static FromUsGallons(value: number): Volume;
    static FromUsOunces(value: number): Volume;
    static FromUsTablespoons(value: number): Volume;
    static FromAuTablespoons(value: number): Volume;
    static FromUkTablespoons(value: number): Volume;
    static FromMetricTeaspoons(value: number): Volume;
    static FromUsTeaspoons(value: number): Volume;
    static FromMetricCups(value: number): Volume;
    static FromUsCustomaryCups(value: number): Volume;
    static FromUsLegalCups(value: number): Volume;
    static FromOilBarrels(value: number): Volume;
    static FromUsBeerBarrels(value: number): Volume;
    static FromImperialBeerBarrels(value: number): Volume;
    static FromUsQuarts(value: number): Volume;
    static FromUsPints(value: number): Volume;
    static FromAcreFeet(value: number): Volume;
    static FromImperialPints(value: number): Volume;
    static FromMicroliters(value: number): Volume;
    static FromCentiliters(value: number): Volume;
    static FromDeciliters(value: number): Volume;
    static FromHectoliters(value: number): Volume;
    static FromKiloliters(value: number): Volume;
    static FromMegaliters(value: number): Volume;
    static FromHectocubicmeters(value: number): Volume;
    static FromKilocubicmeters(value: number): Volume;
    static FromHectocubicfeet(value: number): Volume;
    static FromKilocubicfeet(value: number): Volume;
    static FromMegacubicfeet(value: number): Volume;
    static FromKiloimperialgallons(value: number): Volume;
    static FromMegaimperialgallons(value: number): Volume;
    static FromKilousgallons(value: number): Volume;
    static FromMegausgallons(value: number): Volume;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=volume.g.d.ts.map