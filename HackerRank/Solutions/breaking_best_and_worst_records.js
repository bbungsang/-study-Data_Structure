function breakingRecords(scores) {
  const { i, d } = scores.reduce((acc, score, idx) => {
    if (!idx) {
      acc.i.push(score)
      acc.d.push(score)
    } else {
      const [max] = acc.i
      const [min] = acc.d

      if (score > max) acc.i.unshift(score)
      if (score < min) acc.d.unshift(score)
    }

    return acc
  }, { i: [], d: [] })

  return [i.length - 1, d.length - 1]
}

const r1 = breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])
console.log(`실행 결과: ${r1}, 기대값: 2 4`)
