"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const CSVFileReader_1 = require("./CSVFileReader");
//Create an onject that satisfies the 'DataReader'interface
const cSVFileReader = new CSVFileReader_1.CSVFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface 
const matchReader = new MatchReader_1.MatchReader(cSVFileReader);
matchReader.load();
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
