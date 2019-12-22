"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AmplitudeRatioUnits;
(function (AmplitudeRatioUnits) {
    AmplitudeRatioUnits[AmplitudeRatioUnits["DecibelVolts"] = 0] = "DecibelVolts";
    AmplitudeRatioUnits[AmplitudeRatioUnits["DecibelMicrovolts"] = 1] = "DecibelMicrovolts";
    AmplitudeRatioUnits[AmplitudeRatioUnits["DecibelMillivolts"] = 2] = "DecibelMillivolts";
    AmplitudeRatioUnits[AmplitudeRatioUnits["DecibelsUnloaded"] = 3] = "DecibelsUnloaded";
})(AmplitudeRatioUnits = exports.AmplitudeRatioUnits || (exports.AmplitudeRatioUnits = {}));
class AmplitudeRatio {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get DecibelVolts() {
        return this.convertFromBase(AmplitudeRatioUnits.DecibelVolts);
    }
    get DecibelMicrovolts() {
        return this.convertFromBase(AmplitudeRatioUnits.DecibelMicrovolts);
    }
    get DecibelMillivolts() {
        return this.convertFromBase(AmplitudeRatioUnits.DecibelMillivolts);
    }
    get DecibelsUnloaded() {
        return this.convertFromBase(AmplitudeRatioUnits.DecibelsUnloaded);
    }
    static FromDecibelVolts(value) {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelVolts);
    }
    static FromDecibelMicrovolts(value) {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelMicrovolts);
    }
    static FromDecibelMillivolts(value) {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelMillivolts);
    }
    static FromDecibelsUnloaded(value) {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelsUnloaded);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case AmplitudeRatioUnits.DecibelVolts:
                return this.value;
            case AmplitudeRatioUnits.DecibelMicrovolts:
                return this.value - 120;
            case AmplitudeRatioUnits.DecibelMillivolts:
                return this.value - 60;
            case AmplitudeRatioUnits.DecibelsUnloaded:
                return this.value - 2.218487499;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case AmplitudeRatioUnits.DecibelVolts:
                return this.value;
            case AmplitudeRatioUnits.DecibelMicrovolts:
                return this.value + 120;
            case AmplitudeRatioUnits.DecibelMillivolts:
                return this.value + 60;
            case AmplitudeRatioUnits.DecibelsUnloaded:
                return this.value + 2.218487499;
            default:
                break;
        }
        return NaN;
    }
}
exports.AmplitudeRatio = AmplitudeRatio;
//# sourceMappingURL=amplituderatio.g.js.map