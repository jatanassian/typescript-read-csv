import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

// Read csv file
const csvReader = new CsvFileReader('football.csv');

// Format data
const matchReader = new MatchReader(csvReader);
matchReader.load();

// Analyze and console log report
const logSummary = new Summary(
	new WinsAnalysis('Man United'),
	new ConsoleReport()
);
logSummary.buildAndPrintReport(matchReader.matches);

// Analyze and create html of report
const htmlSummary = new Summary(
	new WinsAnalysis('Man United'),
	new HtmlReport('report')
);
htmlSummary.buildAndPrintReport(matchReader.matches);
