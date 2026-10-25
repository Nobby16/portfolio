import { useState } from 'react'
import SocialIcon from '../components/SocialIcon.jsx'

const profiles = [
  { name: 'GitHub', href: 'https://github.com/Nobby16' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kidus-admassu' },
]

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  async function handleSubmit(event) {
    event.preventDefault()
    if (isSubmitting) return

    const form = event.currentTarget
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setStatus({
        type: 'error',
        message: 'The contact form is not configured yet. Set VITE_WEB3FORMS_ACCESS_KEY in the project root .env.local file and restart the Vite development server.',
      })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const formData = new FormData(form)
      formData.set('access_key', accessKey)
      formData.set('replyto', formData.get('email'))
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send the message.')
      }

      form.reset()
      setStatus({ type: 'success', message: 'Message sent successfully. Thank you for reaching out.' })
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email me directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="page-section section-reveal" id="contact" aria-labelledby="contact-title" data-section-reveal>
      <div className="section-inner contact-content">
        <div className="contact-intro">
          <p className="eyebrow">Get in touch</p>
          <h2 id="contact-title">Let's Connect</h2>
          <p className="contact-copy">
            I'm open to opportunities where I can continue learning, contribute technically,
            and solve practical problems in IT, cybersecurity, and software systems.
          </p>
          <ul className="contact-socials" aria-label="Social profiles">
            {profiles.map(({ name, href }) => (
              <li key={name}>
                <a className="icon-link" href={href} target="_blank" rel="noreferrer" aria-label={name}>
                  <SocialIcon name={name} />
                </a>
              </li>
            ))}
          </ul>
          <a className="contact-email" href="mailto:kidusadmassu16995@gmail.com">
            Prefer email? kidusadmassu16995@gmail.com
          </a>
        </div>

        <form className="contact-form surface" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" autoComplete="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="6" required />
          </div>
          <input className="form-honeypot" type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" aria-hidden="true" />
          <input type="hidden" name="subject" value="Portfolio contact form message" />
          <div className="form-submit-row">
            <button className="button button-primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          <p className={`form-status ${status.type ? `is-${status.type}` : ''}`} role={status.type === 'error' ? 'alert' : 'status'} aria-live={status.type === 'error' ? 'assertive' : 'polite'}>
            {status.message}
          </p>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
