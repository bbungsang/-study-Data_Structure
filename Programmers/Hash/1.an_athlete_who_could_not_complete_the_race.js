function solution(participant, completion) {
  const obj = completion.reduce((x, y) => {
    if (x[y]) x[y] += 1
    else x[y] = 1
    return x
  }, {})

  return participant.find((p) => {
    if (obj[p]) obj[p] -= 1
    else return true
  })
}
