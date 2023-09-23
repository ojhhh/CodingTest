// 가장 가까운 같은 글자
// 문제 설명
// 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
// 예를 들어, s="banana"라고 할 때,  각 글자들을 왼쪽부터 오른쪽으로 읽어 나가면서 다음과 같이 진행할 수 있습니다.

// b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.
// n도 자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.
// a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.
// 따라서 최종 결과물은 [-1, -1, -1, 2, 2, 2]가 됩니다.

// 문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.

// 제한사항
// 1 ≤ s의 길이 ≤ 10,000
// s은 영어 소문자로만 이루어져 있습니다.
// 입출력 예
// s	result
// "banana"	[-1, -1, -1, 2, 2, 2]
// "foobar"	[-1, -1, 1, -1, -1, -1]

// version 1
function solution(s) {
  let answer = [];
  let tmp = [];
  let tmp2 = [];
  s.split("").forEach((a, b) => {
    if (!tmp.includes(a)) {
      // 겹친 알파벳이 없으면 알파벳을 추가
      answer.push(-1);
    } else {
      // 겹친 알파벳이 있으면 겹친 알파벳의 위치를 찾음
      // console.log("겹친 알파벳이 있을 경우 : ", tmp);
      console.log("겹친 알파벳 : ", a);
      // 위치를 찾기 위해 findIndex를 사용하는데 맨처음 나온 알파벳의 위치만 반환하닌까 거꾸로 뒤집음?
      for (let i = tmp.length - 1; 0 <= i; i--) {
        tmp2.push(tmp[i]);
      }
      // 뒤집은 문자열에서 알파벳 찾기
      console.log("뒤집은 문자열에서 겹친 알파벳 찾기", tmp2.indexOf(a) + 1);
      // console.log("거꾸로 뒤집은 문자열 : ", tmp2);
      answer.push(tmp2.indexOf(a) + 1);
    }
    tmp.push(a);
    tmp2 = [];
  });
  return answer;
}

console.log(solution("banana"));
console.log(solution("foobar"));

// version 2
function solution(s) {
  let answer = [];
  let tmp = "";

  s.split("").map((v, i) => {
    if (!tmp.includes(v)) answer.push(-1);
    else {
      answer.push(i - tmp.lastIndexOf(v));
    }
    tmp += v;
  });

  return answer;
}

console.log(solution("banana"));
console.log(solution("foobar"));
