import { type InspectOptions, inspect } from 'node:util';

export type Inspect = (value: any) => string;

export function createInspect(options?: InspectOptions): Inspect {
  return value => inspect(value, Object.assign({
    depth: 20,
    colors: true,
    maxArrayLength: 200,
    breakLength: 80,
  }, options));
}
