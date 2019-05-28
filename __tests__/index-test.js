import expect from 'expect'
import { createChaos } from '../src/utils/createChaos'

describe('createChaos function', () => {
  test('cannot be called with a string for a level', () => {
    expect(createChaos('10')).toThrow()
  })
})


