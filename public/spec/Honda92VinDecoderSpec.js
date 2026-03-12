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
 *  Honda 92 Vin Number decoder Specs
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

    describe("Honda92VinDecoder.manufacturer", function () {

        beforeAll(function () {
            Honda92VinDecoder.init();
        });

        it("should be three characters length", function () {

        });
    });

});