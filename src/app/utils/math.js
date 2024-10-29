export const clamp = (min, max, a) => Math.min(Math.max(min, a), max);
export const normalize = (a, b, x) => (x - a) / (b - a);
export const map = (a, b, c, d, x) => normalize(a, b, x) * (d - c) + c;
