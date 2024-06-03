export type Labels = Record<string, string>;

export type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';

export type Line = {
  time: string;
  level: LogLevel;
  labels?: Labels;
  details?: object;
  msg?: string;
};

export type Stream = {
  write(line: string): void;
};

export type Backend = {
  write(line: Line): void;
};
