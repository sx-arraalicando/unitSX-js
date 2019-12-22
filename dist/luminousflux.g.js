"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LuminousFluxUnits;
(function (LuminousFluxUnits) {
    LuminousFluxUnits[LuminousFluxUnits["Lumens"] = 0] = "Lumens";
})(LuminousFluxUnits = exports.LuminousFluxUnits || (exports.LuminousFluxUnits = {}));
class LuminousFlux {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Lumens() {
        return this.convertFromBase(LuminousFluxUnits.Lumens);
    }
    static FromLumens(value) {
        return new LuminousFlux(value, LuminousFluxUnits.Lumens);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case LuminousFluxUnits.Lumens:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case LuminousFluxUnits.Lumens:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
}
exports.LuminousFlux = LuminousFlux;
//# sourceMappingURL=luminousflux.g.js.map