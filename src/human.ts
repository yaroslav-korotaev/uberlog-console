import { type InspectOptions } from 'node:util';
import chalk from 'chalk';
import { join, formatDate, createInspect, errorMessage, COLORS } from './utils';
import { createFactory } from './factory';

export type HumanOptions = {
  inspect?: InspectOptions;
};

export const human = createFactory<HumanOptions>(options => {
  const inspect = createInspect(options?.inspect);
  
  return line => {
    const { time, level, labels, details, msg } = line;
    
    let str = msg;
    
    if (details && 'err' in details) {
      str = join(str, errorMessage(details.err), ': ');
    }
    
    if (str) {
      str = chalk.cyan(str);
    }
    
    if (details) {
      str = join(str, inspect(details), ' ');
    }
    
    if (labels) {
      const keys = Object.keys(labels);
      const pairs = keys.map(key => `${key}=${labels[key]}`);
      
      str = join(str, chalk.grey(pairs.join(' ')), ' ');
    }
    
    const strTime = chalk.grey(formatDate(new Date(time)));
    const strLevel = COLORS[level](level.toUpperCase().padStart(5));
    const prefix = `[${strTime}] ${strLevel}`;
    
    str = join(prefix, str, ': ');
    
    return str + '\n';
  };
});
