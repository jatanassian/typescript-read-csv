import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

// Format data
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// Analyze and console log report
const logSummary = new Summary(
	new WinsAnalysis('Man United'),
	new ConsoleReport()
);
logSummary.buildAndPrintReport(matchReader.matches);

// Analyze and create html of report
const htmlSummary = Summary.winsAnalysisWithHtmlReport('Man United', 'report');
htmlSummary.buildAndPrintReport(matchReader.matches);
