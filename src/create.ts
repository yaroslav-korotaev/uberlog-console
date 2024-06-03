import { type Stream, type Backend } from './types';
import { json } from './json';
import { compact } from './compact';
import { human } from './human';

export type LogFormat = 'json' | 'compact' | 'human';

export function createBackend(stream: Stream, format?: LogFormat): Backend {
  if (format == 'json') {
    return json(stream);
  } else if (format == 'compact') {
    return compact(stream);
  } else {
    return human(stream);
  }
}
