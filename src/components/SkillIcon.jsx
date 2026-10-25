function SkillIcon({ name }) {
  const shared = {
    className: `skill-icon skill-icon-${name}`,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: false,
  }

  switch (name) {
    case 'terminal':
      return <svg {...shared}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 8h18M7 12l3 2-3 2m6 0h4" /></svg>
    case 'computer':
      return <svg {...shared}><rect x="3" y="4" width="18" height="13" rx="1.5" /><path d="M8 21h8m-4-4v4m-5-12h10" /></svg>
    case 'network':
      return <svg {...shared}><circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="18" r="2.5" /><circle cx="19" cy="18" r="2.5" /><path d="m10.8 7.2-4.5 8.5m6.9-8.5 4.5 8.5M7.5 18h9" /></svg>
    case 'layers':
      return <svg {...shared}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5m-18 4 9 5 9-5" /></svg>
    case 'virtualbox':
      return <svg {...shared}><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4.5 8 7.5 4 7.5-4M12 12v8.5m-4-16 8 4.5v4" /></svg>
    case 'web-shield':
      return <svg {...shared}><path d="M12 3 20 6v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6l8-3Z" /><circle cx="12" cy="11" r="3.2" /><path d="M8.8 11h6.4m-3.2-3.2c1 1.1 1 5.3 0 6.4m-2.4 5.4 2.4-2.8 2.4 2.8" /></svg>
    case 'terminal-shield':
      return <svg {...shared}><path d="M4 4h13v10H4zM7 7l2 2-2 2m4 0h3" /><path d="m17 13 4 1.5v2.8c0 2.1-1.5 3.6-4 4.7-2.5-1.1-4-2.6-4-4.7v-2.8l4-1.5Z" /></svg>
    case 'shield-lock':
      return <svg {...shared}><path d="M12 3 20 6v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6l8-3Z" /><rect x="9" y="10.5" width="6" height="5" rx="1" /><path d="M10.5 10.5V9a1.5 1.5 0 0 1 3 0v1.5" /></svg>
    case 'lab':
      return <svg {...shared}><path d="M9 3h6m-5 0v6l-5.2 8.4A2.4 2.4 0 0 0 6.8 21h10.4a2.4 2.4 0 0 0 2-3.6L14 9V3m-6.3 12h8.6" /><path d="M10 17h.01m4-2h.01" /></svg>
    case 'react':
      return <svg {...shared}><ellipse cx="12" cy="12" rx="9.5" ry="3.7" /><ellipse cx="12" cy="12" rx="9.5" ry="3.7" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9.5" ry="3.7" transform="rotate(120 12 12)" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>
    case 'javascript':
      return <svg {...shared}><path d="M3 3h18v18H3z" fill="currentColor" stroke="none" /><path d="M13 16.5c.5.8 1.1 1.2 2 1.2.8 0 1.3-.4 1.3-1 0-.7-.5-.9-1.5-1.3l-.5-.2c-1.5-.6-2.5-1.3-2.5-2.8 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.8 1.5m-8.7-1.4v5.1c0 1.4-.8 2.2-2.1 2.2-1 0-1.7-.5-2.1-1.3" stroke="#172334" strokeWidth="1.5" /></svg>
    case 'html':
      return <svg {...shared}><path d="m4 3 1.5 16L12 21l6.5-2L20 3H4Z" /><path d="M8 7h8l-.3 2.5H8.3L8.6 12h7.1l-.6 4.8-3.1.9-3.1-.9-.2-2" /></svg>
    case 'css':
      return <svg {...shared}><path d="m4 3 1.5 16L12 21l6.5-2L20 3H4Z" /><path d="M8 7h8m-.4 3H8.3l.3 3h6.7l-.4 3-2.9.8-2.9-.8" /></svg>
    case 'node':
      return <svg {...shared}><path d="m12 2.8 8 4.6v9.2l-8 4.6-8-4.6V7.4l8-4.6Z" /><path d="M9 15V9l6 6V9" /></svg>
    case 'express':
      return <svg {...shared}><path d="M7 5H5v14h2m10-14h2v14h-2M9 12h6m-3-3 3 3-3 3" /></svg>
    case 'nextjs':
      return <svg {...shared} stroke="none"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.6L10 7.8V16H8.8V6.2l8.4 10.8-.6.6Z" /></svg>
    case 'vercel':
      return <svg {...shared} stroke="none"><path fill="currentColor" d="M12 3 22 21H2Z" /></svg>
    case 'mongodb':
      return <svg {...shared}><path d="M12 3c-3.5 4.6-5.3 7.3-4.2 11.2.6 2.2 2 3.6 3.5 4.7L12 21l.8-2.1c1.5-1.1 2.9-2.5 3.5-4.7C17.4 10.3 15.5 7.6 12 3Z" /><path d="M12 8v11" /></svg>
    case 'database':
      return <svg {...shared}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3m-8-7v3" /></svg>
    default:
      return <svg {...shared}><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-2-12-4 14" /></svg>
  }
}

export default SkillIcon
