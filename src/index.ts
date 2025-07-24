import { MatchReader} from "./MatchReader";
import { CSVFileReader } from "./CSVFileReader";
import { ConsoleReport} from './reportTargets/ConsoleReport';
import { WinAnalysis } from "./analyzers/WinAnalysis";
import {Summary} from './Summary';

//Create an onject that satisfies the 'DataReader'interface

const cSVFileReader = new CSVFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface 

const matchReader = new MatchReader(cSVFileReader);
matchReader.load();


const summary = new Summary(
  new WinAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);

