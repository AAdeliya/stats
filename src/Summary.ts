import { MatchData } from "./MatchData";
import { WinAnalysis } from "./analyzers/WinAnalysis";
import { HtmlReport } from "./reportTargets/HTMLReport";

export interface Analyzer {
  run(matches: MatchData[]): string;

}

export interface OutputTarget {
  print(report: string): void;

}

export class Summary {
 
}
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {

    this.buildAndPrintReport(matches: MatchData[]): void {
      const output = this.analyzer.run(matches);
      this.outputTarget.print(output);
    }
  } 

Summary.buildAndPrintReport();

