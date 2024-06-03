import { type Line, type Stream, type Backend } from './types';

export type Renderer<O> = (options?: O) => (line: Line) => string;

export type Factory<O> = (stream: Stream, options?: O) => Backend;

export function createFactory<O>(renderer: Renderer<O>): Factory<O> {
  return (stream, options) => {
    const render = renderer(options);
    
    return {
      write(line) {
        stream.write(render(line));
      },
    };
  };
};
