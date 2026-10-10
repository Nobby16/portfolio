import { useState } from 'react'
import navigation from '../data/navigation.js'

function NavigationLinks({ onNavigate }) {
  return (
    <ul>
      {navigation.map((item) => (
        <li key={item.href}>
          <a href={item.href} onClick={onNavigate}>{item.label}</a>
        </li>
      ))}
    </ul>
  )
}

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem('portfolio-theme')
    return saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem('portfolio-theme', nextTheme)
    setTheme(nextTheme)
  }

  return (
    <button className="icon-link theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`${theme === 'dark' ? 'Dark' : 'Light'} theme`}>
      {theme === 'dark' ? (
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.2 15.5A8.5 8.5 0 0 1 8.5 3.8 8.6 8.6 0 1 0 20.2 15.5Z" /></svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
      )}
    </button>
  )
}

function NavActions() {
  return (
    <div className="nav-actions">
      <ThemeToggle />
    </div>
  )
}

function Navbar() {
  function closeMobileMenu(event) {
    const menu = event.currentTarget.closest('details')
    const href = event.currentTarget.getAttribute('href')
    const target = href?.startsWith('#') ? document.getElementById(href.slice(1)) : null
    const heading = target?.querySelector('h1, h2')
    menu?.removeAttribute('open')
    if (heading) {
      heading.setAttribute('tabindex', '-1')
      window.setTimeout(() => heading.focus({ preventScroll: true }), 0)
    } else {
      menu?.querySelector('summary')?.focus({ preventScroll: true })
    }
  }

  return (
    <header className="site-header">
      <a className="brand" href="#top">Kidus Admassu<span>Portfolio</span></a>
      <nav className="site-nav site-nav-desktop" aria-label="Main navigation">
        <NavigationLinks />
      </nav>
      <div className="desktop-actions"><NavActions /></div>
      <details className="mobile-navigation">
        <summary aria-label="Open navigation menu">Menu</summary>
        <nav className="site-nav site-nav-mobile" aria-label="Mobile navigation">
          <NavigationLinks onNavigate={closeMobileMenu} />
          <NavActions />
        </nav>
      </details>
    </header>
  )
}

export default Navbar
