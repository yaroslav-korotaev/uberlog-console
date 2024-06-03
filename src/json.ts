import { type InspectifyOptions, inspectify } from 'inspectify';
import { createFactory } from './factory';

export type JsonOptions = {
  inspect?: InspectifyOptions;
};

export const json = createFactory<JsonOptions>(options => {
  return line => JSON.stringify(inspectify(line, options?.inspect)) + '\n';
});
