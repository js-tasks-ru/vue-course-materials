export function deepClone(object) {
  return JSON.parse(JSON.stringify(object));
}
