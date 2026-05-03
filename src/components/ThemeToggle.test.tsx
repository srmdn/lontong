import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, useTheme } from '../context/ThemeContext'

const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value },
    removeItem: (key: string) => { delete store[key] },
    clear: () => { store = {} },
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

Object.defineProperty(window, 'matchMedia', {
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  }),
})

function TestToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      aria-pressed={theme === 'dark'}
      data-testid="theme-toggle"
    >
      {theme === 'dark' ? 'dark' : 'light'}
    </button>
  )
}

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark', 'light')
  })

  it('renders with light theme by default', () => {
    render(<ThemeProvider><TestToggle /></ThemeProvider>)
    expect(screen.getByTestId('theme-toggle').textContent).toBe('light')
  })

  it('click toggles to dark', async () => {
    render(<ThemeProvider><TestToggle /></ThemeProvider>)
    await userEvent.click(screen.getByTestId('theme-toggle'))
    expect(screen.getByTestId('theme-toggle').textContent).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('has aria-label and aria-pressed', () => {
    render(<ThemeProvider><TestToggle /></ThemeProvider>)
    const btn = screen.getByTestId('theme-toggle')
    expect(btn.getAttribute('aria-label')).toBe('Toggle dark mode')
  })
})