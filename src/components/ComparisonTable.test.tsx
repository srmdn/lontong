import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ComparisonTable } from './ComparisonTable'

describe('ComparisonTable', () => {
  it('renders benchmark rows', () => {
    render(<ComparisonTable />)
    expect(screen.getByText('Idle RAM (benchmark internal)')).toBeTruthy()
    expect(screen.getByText('Provision Domain + SSL')).toBeTruthy()
    expect(screen.getByText('Deploy aplikasi kecil')).toBeTruthy()
    expect(screen.getByText('Perubahan config runtime')).toBeTruthy()
  })

  it('shows panel labels', () => {
    render(<ComparisonTable />)
    const lontongLabels = screen.getAllByText('Lontong')
    expect(lontongLabels.length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByText('cPanel').length).toBeGreaterThanOrEqual(4)
  })

  it('contains benchmark values for lontong', () => {
    render(<ComparisonTable />)
    expect(screen.getByText('< 100MB')).toBeTruthy()
    expect(screen.getByText('2-3 menit')).toBeTruthy()
  })

  it('renders section heading', () => {
    render(<ComparisonTable />)
    expect(screen.getByText(/Bukti performa dan batas kompatibilitas/)).toBeTruthy()
    expect(screen.getByText('Works now')).toBeTruthy()
  })
})
