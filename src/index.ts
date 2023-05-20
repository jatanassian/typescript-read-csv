import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

// Read csv file
const csvReader = new CsvFileReader('football.csv');

// Format data
const matchReader = new MatchReader(csvReader);
matchReader.load();

// Analyze and report
const summary = new Summary(
	new WinsAnalysis('Man United'),
	new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);
