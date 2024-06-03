export function errorMessage(err: unknown): string {
  if (err instanceof Error) {
    if (err.cause) {
      return `${err.message}: ${errorMessage(err.cause)}`;
    }
    
    return err.message || '<no error message>';
  }
  
  return '' + err;
}
