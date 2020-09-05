class PriorityQueue {
  constructor() {
    this.data = [null]
  }

  getData() {
    return this.data
  }

  enqueue(priority) {
    this.data.push(priority)

    let childIdx = this.data.length - 1
    let childPriority = priority

    let parentIdx = parseInt((childIdx / 2) + '')
    let parentPriority = this.data[parentIdx]

    while (parentPriority > childPriority) {
      this.data[childIdx] = parentPriority
      this.data[parentIdx] = childPriority

      childIdx = parentIdx
      childPriority = this.data[childIdx]

      parentIdx = parseInt((childIdx / 2) + '')
      parentPriority = this.data[parentIdx]
    }
  }
}

const priorityQueue = new PriorityQueue()
const priorityList = [4, 5, 2, 5, 3, 8, 8, 7, 10, 1]
priorityList.forEach((priority) => {
  priorityQueue.enqueue(priority)
})
const [, min] = priorityQueue.getData()
console.log(`실행 결과: ${min}, 기대값: 1`)
