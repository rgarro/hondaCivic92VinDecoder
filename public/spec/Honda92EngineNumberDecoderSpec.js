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
 *  Honda 92 Engine Number decoder Specs
 *  remember the wheels https://www.vmsracing.com/products/pre-order-front-and-rear-drag-race-wheel-set-15x8-15x3-5-4x100-great-for-honda-civic-crx-acura-integra-part-vwst002-vwst003
 * 
 * 
 * 
 * @author Rolando<rgarro@gmail.com> <https://emptyart.github.io>
 */
describe("Honda92EngineNumberDecoder", function () {

    it("should Have init method", function () {
        expect(Honda92EngineNumberDecoder).toHaveMethod('init');
    });

    it("should have init method", function () {
        expect(Honda92EngineNumberDecoder.init).toBeFunction();
    });

    it("should be testable", function () {
        expect(true).toBeTrue();
    });

    /*describe("Honda92EngineNumberDecoder.opt", function () {

        beforeAll(function () {
            Honda92EngineNumberDecoder.init();
        });

        it("should Implement canvas:string,factorycode", function () {

        });
    });*/

});