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
 *  Honda 92 Vin Decoder Object
 *  
 * 
 * 
 * 
 *@author Rolando <rgarro@gmail.com> <https://emptyart.github.io>
 */
var Honda92VinDecoder = {

    manufacturer: "2HG",//Honda of Canada MFG, kill kenny 
    lineEngineBodyTypeCivic1500: "EH2",//civic 1500 2 door
    lineEngineBodyTypeCivic1600: "EH3",//civic 1600 2 door

    init: function () {

    },
    validateLineEngineChunk: function (lineEngineBody) {
        let res = lineEngineBody.search(/EH1[2-3]/);//Let Foreber BE ...
        console.log("here:" + res);
        let ret = (res > -1) ? true : false;
        return ret;
    }
};