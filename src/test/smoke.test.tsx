import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('smoke', () => {
  it('renders react components', () => {
    function Hello() { return <div data-testid="hello">Hello Vitest</div> }
    render(<Hello />)
    expect(screen.getByTestId('hello')).toBeTruthy()
  })
})