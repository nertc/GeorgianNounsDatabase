import { wordlist } from "../wordlist";

export function generate(from: number, count: number): string[] {
  from = Math.max(from, 0);
  return wordlist.slice(from, from + count);
}