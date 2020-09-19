function extraLongFactorials(n) {
  return [...Array(n)].reduce((a, _, i) => a * BigInt(i + 1), 1n).toString()
}

const r1 = extraLongFactorials(25)
console.log(`실행 결과: ${r1}, 기대값: 15511210043330985984000000`)
const r2 = extraLongFactorials(45)
console.log(`실행 결과: ${r2}, 기대값: 119622220865480194561963161495657715064383733760000000000`)
