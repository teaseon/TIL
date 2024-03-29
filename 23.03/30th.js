// 문제 설명
// 마인은 곡괭이로 광산에서 광석을 캐려고 합니다. 마인은 다이아몬드 곡괭이, 철 곡괭이, 돌 곡괭이를 각각 0개에서 5개까지 가지고 있으며, 곡괭이로 광물을 캘 때는 피로도가 소모됩니다. 각 곡괭이로 광물을 캘 때의 피로도는 아래 표와 같습니다.

// 곡괭이와 광물은 각각 다이아몬드, 철, 돌로 나뉜다.
// 다이아몬드 곡괭이로 각 광물을 채광 시 피로도는 다음과 같다.
// 다이아몬드 1, 철 1, 돌 1
// 철 곡괭이로 각 광물을 채광 시 피로도는 다음과 같다.
// 다이아몬드 5, 철 1, 돌 1
// 돌 곡괭이로 각 광물을 채광 시 피로도는 다음과 같다.
// 다이아몬드 25, 철 5, 돌 1

// 예를 들어, 철 곡괭이는 다이아몬드를 캘 때 피로도 5가 소모되며, 철과 돌을 캘때는 피로도가 1씩 소모됩니다. 각 곡괭이는 종류에 상관없이 광물 5개를 캔 후에는 더 이상 사용할 수 없습니다.

// 마인은 다음과 같은 규칙을 지키면서 최소한의 피로도로 광물을 캐려고 합니다.

// 사용할 수 있는 곡괭이중 아무거나 하나를 선택해 광물을 캡니다.
// 한 번 사용하기 시작한 곡괭이는 사용할 수 없을 때까지 사용합니다.
// 광물은 주어진 순서대로만 캘 수 있습니다.
// 광산에 있는 모든 광물을 캐거나, 더 사용할 곡괭이가 없을 때까지 광물을 캡니다.
// 즉, 곡괭이를 하나 선택해서 광물 5개를 연속으로 캐고, 다음 곡괭이를 선택해서 광물 5개를 연속으로 캐는 과정을 반복하며, 더 사용할 곡괭이가 없거나 광산에 있는 모든 광물을 캘 때까지 과정을 반복하면 됩니다.

// 마인이 갖고 있는 곡괭이의 개수를 나타내는 정수 배열 picks와 광물들의 순서를 나타내는 문자열 배열 minerals가 매개변수로 주어질 때, 마인이 작업을 끝내기까지 필요한 최소한의 피로도를 return 하는 solution 함수를 완성해주세요.

// 제한사항
// picks는 [dia, iron, stone]과 같은 구조로 이루어져 있습니다.
// 0 ≤ dia, iron, stone ≤ 5
// dia는 다이아몬드 곡괭이의 수를 의미합니다.
// iron은 철 곡괭이의 수를 의미합니다.
// stone은 돌 곡괭이의 수를 의미합니다.
// 곡괭이는 최소 1개 이상 가지고 있습니다.
// 5 ≤ minerals의 길이 ≤ 50
// minerals는 다음 3개의 문자열로 이루어져 있으며 각각의 의미는 다음과 같습니다.
// diamond : 다이아몬드
// iron : 철
// stone : 돌
// 입출력 예
// picks	minerals	result
// [1, 3, 2]	["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]	12
// [0, 1, 1]	["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"]	50
// 입출력 예 설명
// 입출력 예 #1

// 다이아몬드 곡괭이로 앞에 다섯 광물을 캐고 철 곡괭이로 남은 다이아몬드, 철, 돌을 1개씩 캐면 12(1 + 1 + 1 + 1+ 1 + 5 + 1 + 1)의 피로도로 캘 수 있으며 이때가 최소값입니다.

// 입출력 예 #2

// 철 곡괭이로 다이아몬드 5개를 캐고 돌 곡괭이고 철 5개를 캐면 50의 피로도로 캘 수 있으며, 이때가 최소값입니다.

// function solution(picks, minerals) {
//   var answer = 0;
//   let [dia, iron, stone] = picks;
//   while(minerals.length){
//       if(!dia && !iron && !stone){
//           break;
//       }
//       let curPick;
//       const curMine = minerals.splice(0,5);
//       let curD = 0;
//       let curI = 0;
//       let curS = 0;
//       for(let m of curMine){
//           if(m === 'diamond'){
//               curD++;
//           } else if(m === 'iron'){
//               curI++;
//           } else {
//               curS++;
//           }
//       }
//       console.log(`d: ${curD}, i: ${curI}, s:${curS}`)
//       if(curD >= curI && curD >= curS){
//           curPick = 1;
//       } else if(curI > curD && curI >= curS){
//           curPick = 2;
//       } else {
//           curPick = 3;
//       }
//       console.log(curPick)
      
//       if(curPick === 1){
//           if(dia !== 0){
//               dia--;
//               answer += 5;
//               continue;
//           } else {
//               curPick++;
//           }
//       }
      
//       if(curPick === 2){
//           if(iron !== 0){
//               iron--;
//               answer += curD * 5 + curI + curS;
//               continue;
//           } else {
//               curPick++;
//           }
//       }
      
//       if(curPick === 3){
//           if(stone !== 0){
//               stone--;
//               answer += curD * 25 + curI * 5 + curS;
//               continue;
//           } else if(iron !== 0){
//               iron--;
//               answer += curD * 5 + curI + curS;
//               continue;
//           } else if(dia !== 0){
//               dia--;
//               answer += 5;
//               continue;
//           } else {
//               break;
//           }
//       }
//   }
//   return answer;
// }
// 이 문제에 대해 처음 접근 방법은 곡괭이를 정해두지 않은 채 현재 채광할 5개의 광물 중 가장 유리한 곡괭이를 사용하는 방법을 떠올렸다.
// 따라서 먼저 minerals에서 splice를 통해 5개의 광물을 가져와 이번 캘 광물들로 칭하고,
// 이번 캘 광물들 중 가장 많은 광물을 찾아 곡괭이를 정하는 방법이다.
// 만약 이번 캘 광물이 다이아 3, 철 1, 돌 1로 가정했을 때,
// 이번 곡괭이는 다이아몬드 곡괭이로 정하는 방법이었다.
// 다른 경우에서 이번 캘 광물이 다이아 2, 철 2, 돌 1로 가정했을 때,
// 이번 곡괭이 또한 다이아몬드 곡괭이로 정하는 것이다.
// 하지만 이 방법의 경우,
// picks에 [1,0,1], minerals에 [다이아, 다이아, 철, 철, 돌, 다이아, 다이아, 다이아, 다이아, 다이아] 라는 식으로
// 다음 회차에 무조건 다이아 곡괭이를 써야하는 경우 피로도의 최소값을 구하지 못하기에,
// 이번 회차 광물만 고려하는 것이 아닌 모든 회차의 광물을 고려하여 곡괭이 순서를 정해야 한다.
// 이를 위해서 위 구현 방식을 접고 dfs 방식을 사용해보기로 했다.
// function solution(picks, minerals) {
//   const resArr = [];
//    const dfs = (p, m, a) => {
//       let [dia, iron, stone] = p;
//       if(!dia && !iron && !stone){
//           return resArr.push(a);
//       }
//       if(m.length === 0){
//           return resArr.push(a);
//       }
//       const curMine = m.splice(0,5);
//       let curD = 0;
//       let curI = 0;
//       let curS = 0;
//       for(let m of curMine){
//           if(m === 'diamond'){
//               curD++;
//           } else if(m === 'iron'){
//               curI++;
//           } else if(m === 'stone') {
//               curS++;
//           }
//       }
       
//       if(dia !== 0){
//           dfs([dia-1, iron, stone], m, a + curD + curI, curS);
//       }
//       if(iron !== 0){
//           dfs([dia,iron-1,stone], m, a + curD * 5 + curI + curS);
//       }
//       if(stone !== 0){
//           dfs([dia,iron,stone-1], m , a + curD * 25 + curI * 5 + curS);
//       }
//   }
//    dfs(picks, minerals, 0);
  
//    return Math.min(...resArr)
// }

// dfs로 진행하다보니 문제가 발생했다.
// 현재 횟수의 광물 별 갯수를 체크하는 코드에서 else를 stone으로 처리했는데,
// 이 경우 splice로 기존 배열을 잘라오는 과정에서 문제가 발생할 수 있을 것이라 생각해 else if로 바꿔주었으나,
// 테스트 결과 굳이 그렇게 할 필요는 없었다~
// 그냥 else로 해도 됐겠지만, else if를 통해 확실히 어떤 분기를 해주는 지 보여주는 것이 좋은 것 같다.

// 아무튼 위 코드가 100점 만점에 14.7점 코드라고 하니,, 정확성에 문제가 많다.
// 따라서 이를 해결해야 하는데, 테스트 중 이상한 점을 발견했다.
// 바로 resArr 부분인데, 이는 가장 깊이 도달했을 때, 피로도를 저장하는 배열이다.
// 아래 내용에서 '출력' 부분이 resArr를 로깅 해본 부분이다.

// 입력값 〉	[1, 3, 2], ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]
// 기댓값 〉	12
// 실행 결과 〉	테스트를 통과하였습니다.
// 출력 〉	[ 12, 36, 17, 85 ]

// 입력값이 [1,3,2]로 생각해본다면 resArr는 8개가 나오는 것이 맞는데, 현재 4개밖에 나오지 않는다.
// 그말인 즉슨, 첫 노드는 정상적으로 작동하지만, 두 번째 노드부터 깊이 들어가지 않는 것으로 판단된다.
// 따라서 이를 해결하기 위해 새로운 노드를 들어갈 때 현재 광산의 값을 복제하여 주기로 했다.
// dfs([dia,iron-1,stone], m, a + curD * 5 + curI + curS); 이부분을
// dfs([dia,iron-1,stone], m.slice(), a + curD * 5 + curI + curS); 이렇게
// m을 slice를 통해 복제하여 넘기는 방식으로 바꾸었다.
// 결과적으로 완성된 코드는 아래와 같다.

function solution(picks, minerals) {
  const resArr = [];
   const dfs = (p, m, a) => {
      let [dia, iron, stone] = p;
      if(!dia && !iron && !stone){
          return resArr.push(a);
      }
      if(m.length === 0){
          return resArr.push(a);
      }
      const curMine = m.splice(0,5);
      let curD = 0;
      let curI = 0;
      let curS = 0;
      for(let m of curMine){
          if(m === 'diamond'){
              curD++;
          } else if(m === 'iron'){
              curI++;
          } else if(m === 'stone') {
              curS++;
          }
      }
  
      if(dia !== 0){
          dfs([dia-1, iron, stone], m.slice(), a + curD + curI + curS);
      }
      if(iron !== 0){
          dfs([dia,iron-1,stone], m.slice(), a + curD * 5 + curI + curS);
      }
      if(stone !== 0){
          dfs([dia,iron,stone-1], m.slice(), a + curD * 25 + curI * 5 + curS);
      }
  }
  dfs(picks, minerals, 0);
  return Math.min(...resArr);
}