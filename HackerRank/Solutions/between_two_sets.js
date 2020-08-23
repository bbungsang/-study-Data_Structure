function getTotalX(a, b) {
  const start = Math.max(...a)
  const end = Math.min(...b)

  if (end < start) return 0

  const numList = [...Array( end - start + 1)].reduce((x, _, i) => {
    const num = start + i

    const isNotMultiple = a.some((n) => num % n)
    const isNotAliquot = b.some((n) => n % num)

    if (!isNotMultiple && !isNotAliquot) x.push(num)

    return x
  }, [])

  return numList.length
}

const r1 = getTotalX([ 2, 4 ], [ 16, 32, 96 ])
console.log(`실행 결과: ${r1}, 기대값: 3`)
