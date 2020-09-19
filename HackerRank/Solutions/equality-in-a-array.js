function equalizeArray(arr) {
  const numMap = {}
  let maxValue = 0

  return arr.reduce((a, c) => {
    if (numMap[c]) {
      numMap[c] += 1
    } else {
      numMap[c] = 1
    }

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
