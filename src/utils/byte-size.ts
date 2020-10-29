export function byteSize(str: string): number {
  return Buffer.byteLength(str, 'utf8');
}
