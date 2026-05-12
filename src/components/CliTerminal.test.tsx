import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CliTerminal } from './CliTerminal'

describe('CliTerminal', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the install command', () => {
    render(<CliTerminal />)
    expect(screen.getByText(/curl -sSL/)).toBeTruthy()
  })

  it('has a copy button', () => {
    render(<CliTerminal />)
    expect(screen.getByRole('button', { name: /copy install command/i })).toBeTruthy()
  })

  it('copies command to clipboard on click', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.assign(navigator, { clipboard: { writeText } })

    render(<CliTerminal />)
    await userEvent.click(screen.getByRole('button'))
    expect(writeText).toHaveBeenCalledWith(expect.stringContaining('curl'))
  })

  it('shows Copied feedback after click', async () => {
    Object.assign(navigator, { clipboard: { writeText: vi.fn().mockResolvedValue(undefined) } })

    render(<CliTerminal />)
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByText(/Copied/)).toBeTruthy()
  })

  it('renders preflight checklist content', () => {
    render(<CliTerminal />)
    expect(screen.getByText(/Preflight checklist/)).toBeTruthy()
    expect(screen.getByText(/Gunakan staging VPS terlebih dahulu/)).toBeTruthy()
  })
})
