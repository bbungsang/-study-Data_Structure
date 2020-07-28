function solution(arrangement) {
  const bracketList = arrangement.split('')

  let bars = 0, splitted = 0

  bracketList.forEach((b, i) => {
    if (`${b}${bracketList[i + 1]}` === '()') {
      splitted += bars
      return
    }

    if (`${bracketList[i - 1]}${b}` === '()') {
      return
    }

    if (b === '(') {
      bars += 1
    }

    if (b === ')') {
      splitted += 1
      bars -= 1
    }
  })

  return splitted
} // TODO: Stack/Queue 이용한 풀이

const r = solution('()(((()())(())()))(())')
console.log(`실행한 결과값: ${r}, 기대값: 17`)
