function taumBday(b, w, bc, wc, z) {
  const black = BigInt(b)
  const white = BigInt(w)
  const blackCost = BigInt((bc > wc + z) ? wc + z : bc)
  const whiteCost = BigInt((wc > bc + z) ? bc + z : wc)
  return (blackCost * black) + (whiteCost * white)
}

const l1 = [
  [10, 10, 1, 1, 1, 20],
  [5, 9, 2, 3, 4, 37],
  [3, 6, 9, 1, 1, 12],
  [7, 7, 4, 2, 1, 35],
  [3, 3, 1, 9, 2, 12]
]
l1.forEach(([b, w, bc, wc, z, er]) => {
  const r1 = taumBday(b, w, bc, wc, z)
  console.log(`실행 결과: ${r1}, 기대값: ${er}`)
})

// Greedy
