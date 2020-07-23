function solution(priorities, location) {

  const target = priorities[location].toString()
  priorities[location] = target

  const sortedList = []
  let p = priorities[0], i = 1

  while (priorities.length) {
    if (p < priorities[i]) {
      priorities.push(p)
      priorities.splice(0, 1)

      p = priorities[0]
      i = 1

      continue
    }

    i++

    if (i >= (priorities.length - 1)) {
      sortedList.push(priorities.shift())
      p = priorities[0]
      i = 1
    }
  }

  return sortedList.findIndex((priority) => priority === target) + 1
}

solution([2, 1, 3, 2], 2)
solution([1, 1, 9, 1, 1, 1], 0)
