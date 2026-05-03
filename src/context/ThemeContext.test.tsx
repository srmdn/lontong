import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { ThemeProvider, useTheme } from './ThemeContext'

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

function TestConsumer() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button data-testid="toggle" onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

function renderWithProvider() {
  return render(
    <ThemeProvider>
      <TestConsumer />
    </ThemeProvider>
  )
}

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark', 'light')
  })

  it('defaults to light theme when no preference', () => {
    renderWithProvider()
    expect(screen.getByTestId('theme').textContent).toBe('light')
  })

  it('reads theme from localStorage', () => {
    localStorage.setItem('lontong-theme', '"dark"')
    renderWithProvider()
    expect(screen.getByTestId('theme').textContent).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('falls back to light on corrupted localStorage', () => {
    localStorage.setItem('lontong-theme', 'not-valid-json{{{')
    expect(() => renderWithProvider()).not.toThrow()
    expect(screen.getByTestId('theme').textContent).toBe('light')
  })

  it('toggleTheme switches theme', async () => {
    renderWithProvider()
    const button = screen.getByTestId('toggle')
    await userEvent.click(button)
    expect(screen.getByTestId('theme').textContent).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('lontong-theme')).toBe('"dark"')
  })

  it('toggleTheme switches back to light', async () => {
    localStorage.setItem('lontong-theme', '"dark"')
    renderWithProvider()
    await userEvent.click(screen.getByTestId('toggle'))
    expect(screen.getByTestId('theme').textContent).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('lontong-theme')).toBe('"light"')
  })
})