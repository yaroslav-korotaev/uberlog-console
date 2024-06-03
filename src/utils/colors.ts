import chalk from 'chalk';
import { type LogLevel } from '../types';

export const COLORS: { [key in LogLevel]: chalk.Chalk } = {
  trace: chalk.gray,
  debug: chalk.blue,
  info: chalk.green,
  warn: chalk.yellow,
  error: chalk.red,
  fatal: chalk.red,
};
