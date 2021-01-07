export function deepClone(object) {
  return JSON.parse(JSON.stringify(object));
}

export function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
