export const capitalize = (text: string): string =>
  text.length ? text.charAt(0).toUpperCase() + text.slice(1) : "";
