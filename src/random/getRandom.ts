import { wordlist } from "../wordlist";

export function getRandom(count: number): string[] {
  count = Math.min(count, wordlist.length);
  const randomList = [...wordlist];
  const result = [];
  while(result.length < count) {
    const randomIndex = Math.floor(Math.random() * randomList.length);
    result.push(randomList[randomIndex]);
    randomList[randomIndex] = randomList[randomList.length - 1];
    randomList.pop();
  }
  return result;
}