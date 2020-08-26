function encryption(s) {
  const sList = s.split('')

  const sqrt = Math.sqrt(sList.length)
  const ceil = Math.ceil(sqrt)

  const obj = sList.reduce((a, c, i) => {
    const key = i % ceil
    if (!a[key]) a[key] = c
    else a[key] += c
    return a
  }, {})

  return Object.values(obj).join(' ')
}

const r1 = encryption('haveaniceday')
console.log(`실행 결과: ${r1}, 기대값: hae and via ecy`)
const r2 = encryption('wclwfoznbmyycxvaxagjhtexdkwjqhlojykopldsxesbbnezqmixfpujbssrbfhlgubvfhpfliimvmnny')
console.log(`실행 결과: ${r2}, 기대값: wmgjpnull cyjqlejgi lyhhdzbui wctlsqsbm fxeoxmsvv ovxjeirfm zadysxbhn nxkkbffpn bawobphfy`)
