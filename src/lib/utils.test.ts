import { describe, it, expect } from 'vitest'
import { generateId, cn, formatDate, randomInt, shuffle } from './utils'

describe('utils', () => {
  describe('generateId', () => {
    it('generates unique IDs', () => {
      const id1 = generateId()
      const id2 = generateId()
      expect(id1).not.toBe(id2)
      expect(id1.length).toBeGreaterThan(0)
    })
  })

  describe('cn', () => {
    it('joins class names', () => {
      expect(cn('a', 'b', 'c')).toBe('a b c')
    })

    it('filters falsy values', () => {
      expect(cn('a', false, null, undefined, 'b')).toBe('a b')
    })
  })

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2024-01-15')
      const formatted = formatDate(date)
      expect(formatted).toContain('Jan')
      expect(formatted).toContain('15')
      expect(formatted).toContain('2024')
    })
  })

  describe('randomInt', () => {
    it('generates number within range', () => {
      for (let i = 0; i < 100; i++) {
        const num = randomInt(1, 10)
        expect(num).toBeGreaterThanOrEqual(1)
        expect(num).toBeLessThanOrEqual(10)
      }
    })
  })

  describe('shuffle', () => {
    it('returns array with same length', () => {
      const arr = [1, 2, 3, 4, 5]
      const shuffled = shuffle(arr)
      expect(shuffled.length).toBe(arr.length)
    })

    it('contains same elements', () => {
      const arr = [1, 2, 3, 4, 5]
      const shuffled = shuffle(arr)
      expect(shuffled.sort()).toEqual(arr.sort())
    })
  })
})
