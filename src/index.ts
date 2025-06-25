import { MatchReader} from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CSVFileReader } from "./CSVFileReader";


//Create an onject that satisfies the 'DataReader'interface

const cSVFileReader = new CSVFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface 

const matchReader = new MatchReader(cSVFileReader);
matchReader.load();

let manUnitedWins = 0;
for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
  
}


console.log(`Man United won ${manUnitedWins} games`);