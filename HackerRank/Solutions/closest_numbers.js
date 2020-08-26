function closestNumbers(arr) {
  arr.sort((a, b) => a - b)

  let min = 0

  const obj = arr.reduce((acc, cur, idx) => {
    if ((idx + 1) < arr.length) {
      const next = arr[idx + 1]
      const diff = next - cur

      if (acc[diff]) acc[diff].push(...[cur, next])
      else acc[diff] = [cur, next]

      if (!min || (min > diff)) min = diff
    }

    return acc
  }, {})

  return obj[min]
}

const r1 = closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854])
console.log(`실행 결과: ${r1}, 기대값: -20 30`)
const r2 = closestNumbers([-5, 15, 25, 71, 63])
console.log(`실행 결과: ${r2}, 기대값: 63 71`)
const r3 = closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470 ])
console.log(`실행 결과: ${r3}, 기대값: -520 -470 -20 30`)
