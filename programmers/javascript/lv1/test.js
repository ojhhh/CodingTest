const ta = "bus";
const tb = "nice to meet you";

function solution(string) {
  let arr = ["a", "u", "i", "e", "o"];
  return string
    .split("")
    .filter((a) => !arr.includes(a))
    .join("");
}

console.log(solution(tb));
