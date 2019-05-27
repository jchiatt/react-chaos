import expect from 'expect'
import { createChaos } from '../src/utils/createChaos'

describe('createChaos function', () => {
  const result = () => createChaos();
  
  it('can be called', () => {
    expect(result).toThrow()
  })
})


