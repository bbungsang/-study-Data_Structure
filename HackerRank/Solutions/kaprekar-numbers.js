function kaprekarNumbers(p, q) {
  const result = [...Array(q - p + 1)].reduce((a, _, i) => {
    const number = p + i
    const sqrt = (number * number).toString()

    if (number < 2) return number

    const floor = Math.floor(sqrt.length / 2)

    const [front, rear] = [
      sqrt.substr(0, floor),
      sqrt.substr(floor, sqrt.length)
    ]

    if ((+front + +rear) === number) return a + (!a ? number : ` ${number}`)

    return a
  }, '')

  return result || 'INVALID RANGE'
}

const r1 = kaprekarNumbers(1, 100)
console.log(`실행 결과: ${r1}, 기대값: 1 9 45 55 99`)
const r2 = kaprekarNumbers(100, 300)
console.log(`실행 결과: ${r2}, 기대값: 297`)
