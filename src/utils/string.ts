export function join(a: string | undefined, b: string | undefined, sep: string): string {
  if (a && b) {
    return `${a}${sep}${b}`;
  } else {
    return a || b || '';
  }
}

export function formatDate(ts: Date): string {
  const HH = ts.getHours().toString().padStart(2, '0');
  const mm = ts.getMinutes().toString().padStart(2, '0');
  const ss = ts.getSeconds().toString().padStart(2, '0');
  const SSS = ts.getMilliseconds().toString().padStart(3, '0');
  
  return `${HH}:${mm}:${ss}.${SSS}`;
}
