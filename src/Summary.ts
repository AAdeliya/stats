import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;

}

export interface OutputTarget {
  print(report: string): void;

}

export class Summary {
  buildAndPrintReport(matches: MatchData[]) {
    throw new Error("Method not implemented.");
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {

    buildAndPrintReport(matches: MatchData[]): void {
      const output = this.analyzer.run(matches);
      this.outputTarget.print(output);
    }
  } 
}

 

