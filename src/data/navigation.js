import { SHOW_CYBERSECURITY_LABS } from './siteConfig.js'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  ...(SHOW_CYBERSECURITY_LABS ? [{ label: 'Labs', href: '#labs' }] : []),
  { label: 'Contact', href: '#contact' },
]

export default navigation
