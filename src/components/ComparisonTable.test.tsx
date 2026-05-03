import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ComparisonTable } from './ComparisonTable'

describe('ComparisonTable', () => {
  it('renders all 6 feature rows', () => {
    render(<ComparisonTable />)
    // Each feature is a heading
    expect(screen.getByText('Arsitektur')).toBeTruthy()
    expect(screen.getByText('Resource (RAM)')).toBeTruthy()
    expect(screen.getByText('Web Server')).toBeTruthy()
    expect(screen.getByText('HTTPS/SSL')).toBeTruthy()
    expect(screen.getByText('Config Update')).toBeTruthy()
    expect(screen.getByText('Biaya')).toBeTruthy()
  })

  it('shows panel labels', () => {
    render(<ComparisonTable />)
    const lontongLabels = screen.getAllByText('Lontong')
    expect(lontongLabels.length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByText('cPanel').length).toBeGreaterThanOrEqual(6)
  })

  it('contains bar chart with Go', () => {
    render(<ComparisonTable />)
    expect(screen.getByText(/Go \(Single Binary\)/)).toBeTruthy()
  })

  it('contains Biaya with Gratis', () => {
    render(<ComparisonTable />)
    expect(screen.getByText(/100% Gratis/)).toBeTruthy()
  })

  it('renders section heading', () => {
    render(<ComparisonTable />)
    expect(screen.getByText(/What you get with Lontong/)).toBeTruthy()
  })
})