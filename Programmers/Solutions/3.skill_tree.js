function solution(skill, skillTreeList) {
  const skillList = skill.split('')

  let priority = 1
  const ref = skillList.reduce((x, y) => {
    x[y] = priority
    x[priority] = y
    priority++
    return x
  }, {})

  return skillTreeList.reduce((acc, cur) => {
    const filteredList = cur.split('').filter((s) => ref[s])

    if (!filteredList.length) return acc + 1

    const isInvalid = filteredList.some((s, i) => {
      if (!i) return s !== skillList[0]
      return (ref[s] < ref[filteredList[i - 1]]) || (filteredList[i - 1] !== ref[ref[s] - 1])
    })

    return isInvalid ? acc : acc + 1
  }, 0)
}

solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']) // return 2
