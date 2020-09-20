function equalizeArray(arr) {
  /* 수정 전 */
  // const obj = arr.reduce((x, y) => {
  //   if (x[y]) x[y] += 1
  //   else x[y] = 1
  //   return x
  // }, {})
  //
  // const [maxValue] = Object.values(obj).sort((a, b) => b - a)
  // const targetKey = +Object.keys(obj).find((k) => obj[k] === maxValue)
  //
  // return arr.reduce((x, y) => {
  //     if (y !== targetKey) return x + 1
  //     return x
  // }, 0)

  /* 수정 후 */
  const numMap = {}
  let maxValue = 0

  return arr.reduce((a, c) => {
    if (numMap[c]) numMap[c] += 1
    else numMap[c] = 1

    const value = numMap[c] || 1
    a += 1

    if (value > maxValue) {
      a -= (value - maxValue)
      maxValue = value
    }

    return a
  }, 0)
}

const r1 = equalizeArray([3, 3, 2, 1, 3])
console.log(`실행 결과: ${r1}, 기대값: 2`)
const r2 = equalizeArray([1, 2, 3, 1, 2, 3, 3, 3])
console.log(`실행 결과: ${r2}, 기대값: 4`)

/*
[Comment]
이전에 풀었던 문제인 줄 모르고 또 풀었다.
기존 풀이는 반복 관련 함수를 다수로 썼는데 이번에 바뀐 코드는 루프를 한 번으로 줄였다.
문제를 푸는 방식이 점차 개선되고 있다는 것을 알 수 있었다.
*/
