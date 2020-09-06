function pairs(k, arr) {
  const sorted = quickSort(arr)

  if (sorted.length % 2) sorted.push(0)

  return sorted.reduce((acc, cur, idx) => {
    let start = idx
    let end = sorted.length - 1
    let pivot = Math.floor((start + end) / 2)

    while ((end - start) > 1) {
      const diff = cur - sorted[pivot]

      if (diff === k) acc += 1

      if (diff >= k) end = pivot
      else start = pivot

      pivot = Math.floor((start + end) / 2)
    }

    return acc
  }, 0)
}

function quickSort(arr) {
  if (!arr.length) return []

  const [middle] = arr
  const left = []
  const right = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= middle) left.push(arr[i])
    else right.push(arr[i])
  }

  return quickSort(left).concat(middle, quickSort(right))
}

const r1 = pairs(2, [1, 5, 3, 4, 2])
console.log(`실행 결과: ${r1}, 기대값: 3`)
const r2 = pairs(2, [1, 3, 5, 8, 6, 4, 2])
console.log(`실행 결과: ${r2}, 기대값: 5`)
const r3 = pairs(1, [363374326, 364147530, 61825163, 1073065718, 1281246024, 1399469912, 428047635, 491595254, 879792181, 1069262793])
console.log(`실행 결과: ${r3}, 기대값: 0`)
