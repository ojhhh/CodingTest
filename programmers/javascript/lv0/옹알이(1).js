// 옹알이 (1)
// 문제 설명
// 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ babbling의 길이 ≤ 100
// 1 ≤ babbling[i]의 길이 ≤ 15
// babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장합니다.
// 즉, 각 문자열의 가능한 모든 부분 문자열 중에서 "aya", "ye", "woo", "ma"가 한 번씩만 등장합니다.
// 문자열은 알파벳 소문자로만 이루어져 있습니다.
// 입출력 예
// babbling	result
// ["aya", "yee", "u", "maa", "wyeoo"]	1
// ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]	3
// 입출력 예 설명
// 입출력 예 #1

// ["aya", "yee", "u", "maa", "wyeoo"]에서 발음할 수 있는 것은 "aya"뿐입니다. 따라서 1을 return합니다.
// 입출력 예 #2

// ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]에서 발음할 수 있는 것은 "aya" + "ye" = "ayaye", "ye", "ye" + "ma" + "woo" = "yemawoo"로 3개입니다. 따라서 3을 return합니다.
// 유의사항
// 네 가지를 붙여 만들 수 있는 발음 이외에는 어떤 발음도 할 수 없는 것으로 규정합니다. 예를 들어 "woowo"는 "woo"는 발음할 수 있지만 "wo"를 발음할 수 없기 때문에 할 수 없는 발음입니다.

// 실패작

// function solution(babbling) {
//   let answer = 0;
//   let arr = ["aya", "ye", "woo", "ma"];
//   let tmp = "";
//   let cnt = 0;

//   babbling.forEach((a, i) => {
//     arr.map((b) => {
//       // 받아오면 매개변수에서 arr의 값이 포함되있으면
//       if (a.includes(b)) {
//         while (tmp.length != 0 && cnt < 4) {
//           // 포함된 부분을 잘라
//           console.log(a);
//           const regex = new RegExp(b, "g");
//           // console.log(regex);
//           tmp = a.replace(regex, "");
//           // 잘랐는데 문자가 남아있다?
//           // 그럼 다시 arr를 비교해서 겹치는게 있나봐
//           cnt++;
//           // for문이 끝날때까지 돌렸는데 0이 아니다? 그럼 빠꾸
//         }
//         if (tmp.length == 0) {
//           answer++;
//           tmp = "";
//         } else tmp = "";
//       }
//     });
//   });

//   return answer;
// }

// 2차 시기
function solution(babbling) {
  // 배열을 순회하면서 옹알이 문자를 다지워
  // 정확한 단어로 다지워지면 배열의 길이가 짧아지겟지?

  ["aya", "ye", "woo", "ma"].map((a) => {
    babbling.forEach((b, i) => {
      const reg = new RegExp(`(${a})+`, "g");
      let tmp = b.replace(reg, " ");
      babbling[i] = tmp;
    });
  });

  const answer = babbling.filter((item) => item.trim() === "").length;

  return answer;
}

// console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
// console.log(solution(["ayaayaayaayaayaayaye"]));

// console.log("ayaye".includes("aya"));

// test.forEach((a, i) => {
//   let tmp = a.replace(/(aya)+/g, "");
//   test[i] = tmp;
// });
// test.forEach((a, i) => {
//   let tmp = a.replace(/(ye)+/g, "");
//   test[i] = tmp;
// });
// test.forEach((a, i) => {
//   let tmp = a.replace(/(woo)+/g, "");
//   test[i] = tmp;
// });
// test.forEach((a, i) => {
//   let tmp = a.replace(/(ma)+/g, "");
//   test[i] = tmp;
// });

// test.forEach((a, i) => {
//   let tmp = a.replace(/(ma)+/g, "");
//   test[i] = tmp;
// });

// console.log(test);

// 배열에서 특정 문구 삭제 성공

// let test = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];
// let arr = ["aya", "ye", "woo", "ma"];

// arr.map((a) => {
//   test.forEach((b, i) => {
//     const reg = new RegExp(`(${a})+`, "g");
//     console.log("reg : ", reg);
//     let tmp = b.replace(reg, "");
//     console.log(tmp);
//     test[i] = tmp;
//   });
// });

// console.log(test);
