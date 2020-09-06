function larrysArray(A) {
  Array(A.length - 2).fill(0).forEach((_, index) => {
    rotate(A, index)
  })

  const isUnsorted = A.slice(A.length - 3).some((n, i) => n !== A[A.length - 3] + i)
  return isUnsorted ? 'NO' : 'YES'
}

function rotate(A, index) {
  let isRotated = true
  let start = index
  let end = index + 2
  const target = index + 1

  while (isRotated) {
    if (A[index] === target) {
      isRotated = false
    }

    const slicedList = A.slice(start, end + 1)

    if ((A[start] === target) || slicedList.includes(target)) {
      slicedList.some(() => {
        if (A[start] === target) {
          if (start > index) {
            start -= 1
            end -= 1
          }
          return true
        }

        const temp = A[start]
        A[start] = A[start + 1]
        A[start + 1] = A[end]
        A[end] = temp
      })
    } else {
      start += 1
      end += 1
    }
  }
}

const r1 = larrysArray([1, 6, 5, 2, 3, 4])
console.log(`실행 결과: ${r1}, 기대값: NO`)
const r2 = larrysArray([3, 1, 2, 4])
console.log(`실행 결과: ${r2}, 기대값: YES`)
