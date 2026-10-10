import { useEffect } from 'react'

function useSectionReveal() {
  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined
    }

    const sections = document.querySelectorAll('[data-section-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    }, {
      rootMargin: '0px 0px -6% 0px',
      threshold: 0.08,
    })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
}

export default useSectionReveal
