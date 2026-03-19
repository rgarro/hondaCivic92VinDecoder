/**
 * ⠀⠀⠀⠀⣀⣀⣠⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣄⣀⣀⠀⠀⠀⠀
 * ⠀⣠⣶⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣶⣄⠀
 * ⠀⣿⣿⡟⠉⢸⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⡇⠉⢻⣿⣿⠀
 * ⢸⣿⣿⠀⠀⢸⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡇⠀⠀⣿⣿⡇
 * ⢸⣿⣿⠀⠀⢸⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⡇⠀⠀⣿⣿⡇
 * ⢸⣿⣿⠀⠀⠸⣿⣿⣿⣷⡀⠀⠀⠀⠀⢀⣾⣿⣿⣿⠇⠀⠀⣿⣿⡇
 * ⠈⣿⣿⡀⠀⠀⣿⣿⣿⣿⣿⣶⣶⣶⣶⣿⣿⣿⣿⣿⠀⠀⢀⣿⣿⠁
 * ⠀⣿⣿⡇⠀⠀⣿⣿⣿⣿⡿⠿⠛⠛⠿⢿⣿⣿⣿⣿⠀⠀⢸⣿⣿⠀
 * ⠀⢹⣿⣿⣄⡀⢸⣿⣿⣿⠁⠀⠀⠀⠀⠈⣿⣿⣿⡇⢀⣠⣿⣿⡏⠀
 * ⠀⠀⠻⢿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⡿⠟⠀⠀
 * ⠀⠀⠀⠀⠈⠉⠙⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠋⠉⠁⠀⠀⠀⠀
 *  Honda 92 Vin Number Decoder Specs
 * 
 * 
 * 
 * 
 * @author Rolando<rgarro@gmail.com> <https://emptyart.github.io>
 */
describe("Honda92VinDecoder", function () {

    it("should Have init method", function () {
        expect(Honda92VinDecoder).toHaveMethod('init');
    });

    it("should have init method", function () {
        expect(Honda92VinDecoder.init).toBeFunction();
    });

    it("should be testable", function () {
        expect(true).toBeTrue();
    });

    //Manufacturere
    describe("Honda92VinDecoder.manufacturer", function () {

        beforeAll(function () {
            Honda92VinDecoder.init();
        });

        it("should be three characters length", function () {
            expect(Honda92VinDecoder.manufacturer.length).toBe(3);
        });
    });

    //Line engine and body type
    //lineEngineBodyTypeCivic1500: "EH2",//civic 1500 2 door
    //lineEngineBodyTypeCivic1600: "EH3",//civic 1600 2 door
    describe("Honda92VinDecoder.lineEngineBodyType", function () {

        beforeAll(function () {
            Honda92VinDecoder.init();
        });

        it("should be three characters length", function () {
            lineEngineChunk = "AH3";
            expect(lineEngineChunk.length).toBe(3);
            expect(Honda92VinDecoder.validateLineEngineChunk(lineEngineChunk)).toBeFalse();
        });

        it("should have validateLineEngineChunk method", function () {
            expect(Honda92VinDecoder.validateLineEngineChunk).toBeFunction();
        });


        it("validateLineEngineChunk method should return true on valid data and false on invalid", function () {
            validLineEngineChunk = "AH3";
            invalidLineEngineChunk = "XY3";
            expect(Honda92VinDecoder.validateLineEngineChunk(validLineEngineChunk)).toBeTrue();
            expect(Honda92VinDecoder.validateLineEngineChunk(invalidLineEngineChunk)).toBeFalse();
        });
    });

});