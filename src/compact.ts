import { join, errorMessage, COLORS } from './utils';
import { createFactory } from './factory';

export const compact = createFactory(() => {
  return line => {
    const { level, details, msg } = line;
    
    let str = '' + msg;
    
    if (details) {
      if ('err' in details) {
        str = join(str, errorMessage(details.err), ': ');
      }
    }
    
    if (level != 'info') {
      const color = COLORS[level];
      str = join(color(level.padEnd(5)), str, ' ');
    }
    
    return str + '\n';
  };
});
