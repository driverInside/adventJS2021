import countSheeps from './sheeps'

describe('AdventJS day 1: Counting sheeps', () => {
  const mockSheeps = [
    { name: 'Noa', color: 'blue' },
    { name: 'Euge', color: 'red' },
    { name: 'Navidad', color: 'red' },
    { name: 'Ki Na Ma', color: 'red' },
    { name: 'AAAAAaaaaa', color: 'red' },
    { name: 'Nnnnnnnn', color: 'red' }
  ]

  it('should be defined', () => {
    expect(countSheeps).toBeDefined()
  })

  it('should return an array of two sheeps', () => {
    const sheepsCounted = countSheeps(mockSheeps)
    expect(Array.isArray(sheepsCounted)).toBe(true)
    expect(sheepsCounted.length).toBe(2)
    expect(sheepsCounted).toContainEqual({ name: 'Navidad', color: 'red' })
    expect(sheepsCounted).toContainEqual({ name: 'Ki Na Ma', color: 'red' })
  })
})
