import '@testing-library/jest-dom/vitest'

class IntersectionObserverMock {
  observe = vi.fn()
  disconnect = vi.fn()
  unobserve = vi.fn()
}
window.IntersectionObserver = IntersectionObserverMock