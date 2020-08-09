function equalizeArray(arr) {
  const obj = arr.reduce((x, y) => {
    if (x[y]) x[y] += 1
    else x[y] = 1
    return x
  }, {})

  const [maxValue] = Object.values(obj).sort((a, b) => b - a)
  const targetKey = +Object.keys(obj).find((k) => obj[k] === maxValue)

  return arr.reduce((x, y) => {
      if (y !== targetKey) return x + 1
      return x
  }, 0)
}

const r1 = equalizeArray([3, 3, 2, 1, 3])
console.log(`실행 결과: ${r1}, 기대값: 2`)
const r2 = equalizeArray([1, 2, 3, 1, 2, 3, 3, 3])
console.log(`실행 결과: ${r2}, 기대값: 4`)
