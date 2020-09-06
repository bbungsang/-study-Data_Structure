function heapSort(arr) {
  if (arr.length < 2) return arr

  if (arr[0] !== null) {
    arr.unshift(null)
  }

  [...Array(arr.length - 2)].forEach((_, idx) => {
    heapify(arr, idx)

    const swapIdx = arr.length - (idx + 1)

    const temp = arr[1]
    arr[1] = arr[swapIdx]
    arr[swapIdx] = temp
  })

  return arr.slice(1)
}

function heapify(arr, idx) {
  let parentIdx = 1, childIdx = 2
  let isChanged = false, isHeapified = true

  while (isHeapified) {
    const parent = arr[parentIdx]
    const child = arr[childIdx]

    if (parent < child) {
      const temp = parent
      arr[parentIdx] = child
      arr[childIdx] = temp

      isChanged = true
    }

    const isRight = (parentIdx * 2) < childIdx
    if (isRight) parentIdx = parentIdx + 1
    childIdx = !isRight ? childIdx + 1 : parentIdx * 2

    if (childIdx >= (arr.length - idx)) {
      isHeapified = isChanged
      isChanged = false

      parentIdx = 1
      childIdx = 2
    }
  }
}

const r1 = heapSort([3, 6, 2, 5, 1, 7, 2, 4])
console.log(r1)
const r2 = heapSort([17, 19, 2, 4, 3, 16, 10, 15, 5, 1])
console.log(r2)
