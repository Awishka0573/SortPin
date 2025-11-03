import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import initScrollAnimations from './utils/scrollAnimation'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Initialize scroll animations on next frame so DOM is mounted
if (typeof window !== 'undefined') {
  // give framework a tick to mount children
  requestAnimationFrame(() => {
    try {
      initScrollAnimations()
    } catch (e) {
      // fail silently; animation is non-critical
      console.error('scroll animation init failed', e)
    }
  })
}
