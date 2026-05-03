import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { ReactNode } from 'react'
import type { Theme } from '../types'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem('lontong-theme')
    if (stored) {
      const parsed = JSON.parse(stored)
      if (parsed === 'light' || parsed === 'dark') return parsed
    }
  } catch { /* corrupted — fall through */ }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

function applyTheme(theme: Theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
    try {
      localStorage.setItem('lontong-theme', JSON.stringify(theme))
    } catch { /* quota exceeded — ignore */ }
  }, [theme])

  useEffect(() => {
    function handleStorage(e: StorageEvent) {
      if (e.key === 'lontong-theme' && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue)
          if (parsed === 'light' || parsed === 'dark') {
            setTheme(parsed)
          }
        } catch { /* ignore */ }
      }
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}