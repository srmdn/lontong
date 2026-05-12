import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DashboardMockup } from './DashboardMockup'

describe('DashboardMockup', () => {
  it('renders workflow cards', () => {
    render(<DashboardMockup />)
    const cards = screen.getAllByRole('status')
    expect(cards).toHaveLength(6)
  })

  it('shows key workflow labels', () => {
    render(<DashboardMockup />)
    expect(screen.getByText(/Domain dan SSL/)).toBeTruthy()
    expect(screen.getByText(/Deploy Site/)).toBeTruthy()
    expect(screen.getByText(/Backup dan Restore/)).toBeTruthy()
  })

  it('cards have aria-labels with eta values', () => {
    render(<DashboardMockup />)
    expect(screen.getByLabelText(/Domain dan SSL: 2-3 menit/)).toBeTruthy()
  })
})
