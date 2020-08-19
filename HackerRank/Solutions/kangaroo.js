function kangaroo(x1, v1, x2, v2) {
  return ((v1 <= v2) || ((x2 - x1) % (v1 - v2))) ? 'NO' : 'YES'
}

const r1 = kangaroo(0, 3, 4, 2)
console.log(`실행 결과: ${r1}, 기대값: YES`)
const r2 = kangaroo(0, 2, 5, 3)
console.log(`실행 결과: ${r2}, 기대값: NO`)
