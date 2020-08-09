function workbook(n, k, arr) {
  const list = arr.reduce((x, y) => {
    const numberList = [...Array(y)].map((_, i) => i + 1)
    const length = parseInt(`${y / k}`) + ((y % k) ? 1 : 0)
    return [
      ...x,
      ...[...Array(length)].map((_, i) => {
        return numberList.slice(k * i, k * (i + 1))
      })
    ]
  }, [])

  return list.reduce((x, y, i) => {
    return y.includes(i + 1) ? x + 1 : x
  }, 0)
}

const r1 = workbook(5, 3, [4, 2, 6, 1, 10])
console.log(`실행 결과: ${r1}, 기대값: 4`)
const r2 = workbook(10, 5, [3, 8, 15, 11, 14, 1, 9, 2, 24, 31])
console.log(`실행 결과: ${r2}, 기대값: 8`)

// 풀긴 했지만 성능 개선(루프 줄이기 등)이 필요해 보인다.
