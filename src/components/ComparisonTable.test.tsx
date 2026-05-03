import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ComparisonTable } from './ComparisonTable'

describe('ComparisonTable', () => {
  it('renders all 6 data rows + header', () => {
    render(<ComparisonTable />)
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(7)
  })

  it('shows correct column headers', () => {
    render(<ComparisonTable />)
    expect(screen.getByText('Fitur')).toBeTruthy()
    expect(screen.getAllByText(/cPanel/).length).toBeGreaterThan(0)
    expect(screen.getByText('Control Panel Lain')).toBeTruthy()
    expect(screen.getByText('Lontong (LPanel)')).toBeTruthy()
  })

  it('contains Arsitektur row with Go', () => {
    render(<ComparisonTable />)
    expect(screen.getByText('Arsitektur')).toBeTruthy()
    expect(screen.getByText(/Go \(Single Binary\)/)).toBeTruthy()
  })

  it('contains Biaya row with Gratis', () => {
    render(<ComparisonTable />)
    expect(screen.getByText('Biaya')).toBeTruthy()
    expect(screen.getByText(/100% Gratis/)).toBeTruthy()
  })

  it('has overflow-x-auto for mobile scroll', () => {
    const { container } = render(<ComparisonTable />)
    const wrapper = container.querySelector('.overflow-x-auto')
    expect(wrapper).toBeTruthy()
  })
})