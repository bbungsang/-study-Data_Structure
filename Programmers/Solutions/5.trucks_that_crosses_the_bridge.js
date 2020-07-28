function solution(bridgeLength, weight, truckWeights) {
  let seconds = 0, total = 0
  const trucksOnBridge = Array(bridgeLength).fill(0)

  while (trucksOnBridge.length) {
    seconds += 1
    total -= trucksOnBridge.pop()

    if (truckWeights.length) {
      if ((total + truckWeights[0]) <= weight) {
        trucksOnBridge.unshift(truckWeights[0])
        total += truckWeights[0]
        truckWeights.splice(0, 1)
      } else {
        trucksOnBridge.unshift(0)
      }
    }
  }

  return seconds
}

const r1 = solution(2, 10, [7, 4, 5, 6])
console.log(`실행한 결과값: ${r1}, 기대값: 8`)
const r2 = solution(100, 100, [10])
console.log(`실행한 결과값: ${r2}, 기대값: 101`)
const r3 = solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
console.log(`실행한 결과값: ${r3}, 기대값: 110`)
