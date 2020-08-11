function pageCount(n, p) {
  const turn = parseInt(`${n / 2}`)
  const page = parseInt(`${p / 2}`)
  return ((p - 1) < (n - p)) ? page : turn - page
}

const r1 = pageCount(6, 2)
console.log(`실행 결과: ${r1}, 기대값: 1`)
const r2 = pageCount(5, 4)
console.log(`실행 결과: ${r2}, 기대값: 0`)
const r3 = pageCount(5, 1)
console.log(`실행 결과: ${r3}, 기대값: 0`)
const r4 = pageCount(7, 4)
console.log(`실행 결과: ${r4}, 기대값: 1`)
