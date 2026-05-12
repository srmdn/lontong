import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../context/ThemeContext'
import type { ReactNode } from 'react'

vi.mock('framer-motion', () => ({
  motion: { div: 'div', section: 'section', h1: 'h1', p: 'p' },
  useReducedMotion: () => false,
  AnimatePresence: ({ children }: { children: ReactNode }) => children,
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
    expect(screen.getByText(/workflow inti/i)).toBeTruthy()
  })

  it('H1 renders updated positioning text', () => {
    render(<ThemeProvider><Hero /></ThemeProvider>)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1.textContent).toContain('Alternatif cPanel')
    expect(h1.className).toContain('text-text-dark')
  })
})
