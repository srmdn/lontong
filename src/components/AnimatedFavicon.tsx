import { useEffect } from 'react'

export function AnimatedFavicon() {
  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')

    function handleVisibility() {
      if (!link) return
      if (document.hidden) {}
    }

    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

  return null
}