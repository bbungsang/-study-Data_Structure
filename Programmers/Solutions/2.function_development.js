function solution(progresses, speeds) {
  const timeList = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]))
  return timeList.reduce((x, y, i) => {
    if (!i || timeList[i - 1] < y) {
      x.push(1)
    } else {
      x[x.length - 1] += 1
      timeList[i] = timeList[i - 1]
    }
    return x
  }, [])
}

solution([93,30,55], [1,30,5]) // return [2, 1]
