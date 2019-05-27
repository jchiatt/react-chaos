import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

describe('Chaos renders', () => {
  let node
  const TestComponent = () => <h1>Test</h1>


  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('always passes this test', () => {
    render(<TestComponent />, node, () => {
      expect(node.innerHTML).toContain('Test')
    })
  })
})


