import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../context/ThemeContext'

vi.mock('framer-motion', () => ({
  motion: { div: 'div', section: 'section', h1: 'h1', p: 'p' },
  useReducedMotion: () => false,
  AnimatePresence: ({ children }: any) => children,
}))

import { Hero } from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: { clear: vi.fn(), getItem: vi.fn(), setItem: vi.fn(), removeItem: vi.fn() },
      writable: true,
    })
    Object.defineProperty(window, 'matchMedia', {
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
      writable: true,
    })
    document.documentElement.classList.remove('dark')
  })

  it('renders tagline as H1', () => {
    render(<ThemeProvider><Hero /></ThemeProvider>)
    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy()
  })

  it('renders sub-headline', () => {
    render(<ThemeProvider><Hero /></ThemeProvider>)
    expect(screen.getByText(/Go dan Caddy/)).toBeTruthy()
  })

  it('H1 renders on dark background', () => {
    render(<ThemeProvider><Hero /></ThemeProvider>)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1.textContent).toContain('Kelola Server Tanpa Beban')
    expect(h1.className).toContain('text-text-dark')
  })
})