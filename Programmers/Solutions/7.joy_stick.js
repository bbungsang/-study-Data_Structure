/*
* [Note] 탐욕(Greedy) 알고리즘
* - 가장 좋다고 생각하는 방식을 선택해 나가는 방식
* - 즉, 최적의 결과를 도출한다는 보장은 없음
* - 한 번의 선택이 다음의 선택과 전혀 무관한 값이면 사용이 적절
* */

function solution(name) {
  let strList = name.split('')

  const sum = strList.reduce((x, y, i) => {
    const position = y.charCodeAt(0) - 65
    const move = (position > 13) ? (26 - position) : position
    return x + move + 1
  }, -1)

  let index, count = 0
  const aMap = strList.reduce((x, y, i) => {
    if (!i) return x
    if (y === 'A') {
      if (!count) index = i
      count += 1
      if (strList[i + 1] !== 'A') {
        if (x[count] !== 1) x[count] = index
        count = 0
      }
    }
    return x
  }, {})

  const length = Object.keys(aMap).sort((a, b) => b - a)[0]

  if ((aMap[length] === 1) || ((aMap[length] + length) === strList.length)) {
    return sum - length
  }

  if (length > aMap[length]) {
    return sum - length + (aMap[length] - 1)
  }

  return sum
}

const r1 = solution('JEROEN')
console.log(`실행한 결과값: ${r1}, 기대값: 56`)
const r2 = solution('JAN')
console.log(`실행한 결과값: ${r2}, 기대값: 23`)
const r3 = solution('ABAAAAAAAAABB')
console.log(`실행한 결과값: ${r3}, 기대값: 7`)
const r4 = solution('ABABAAAAAAABA')
console.log(`실행한 결과값: ${r4}, 기대값: 11`)
const r5 = solution('AAAZAAZA')
console.log(`실행한 결과값: ${r5}, 기대값: 7`)
