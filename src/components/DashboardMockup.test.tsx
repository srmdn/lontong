import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DashboardMockup } from './DashboardMockup'

describe('DashboardMockup', () => {
  it('renders 3 widgets', () => {
    render(<DashboardMockup />)
    const widgets = screen.getAllByRole('status')
    expect(widgets).toHaveLength(3)
  })

  it('shows CPU, RAM, Disk labels', () => {
    render(<DashboardMockup />)
    expect(screen.getByText(/CPU/)).toBeTruthy()
    expect(screen.getByText(/Memory/)).toBeTruthy()
    expect(screen.getByText(/Disk/)).toBeTruthy()
  })

  it('widgets have aria-labels with values', () => {
    render(<DashboardMockup />)
    const cpu = screen.getByLabelText(/CPU Usage: 23%/)
    expect(cpu).toBeTruthy()
  })
})