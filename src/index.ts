import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

const csvReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvReader);

matchReader.load();
