import contactMethods from '../data/contactMethods.js'
import SocialIcon from './SocialIcon.jsx'

function Footer() {
  const footerLinks = contactMethods.filter((method) => method.showInFooter)

  return (
    <footer className="site-footer">
      <div className="footer-identity">
        <span>Kidus Admassu</span>
        <span>Information Systems • IT • Cybersecurity</span>
      </div>
      <nav aria-label="Footer links">
        <ul className="footer-links">
          {footerLinks.map((method) => (
            <li key={method.label}>
              <a
                href={method.href}
                aria-label={method.label === 'GitHub' || method.label === 'LinkedIn' ? method.label : method.label === 'CV' ? 'Open CV PDF in a new tab' : undefined}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noreferrer' : undefined}
              >
                {method.label === 'GitHub' || method.label === 'LinkedIn'
                  ? <SocialIcon name={method.label} />
                  : method.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
