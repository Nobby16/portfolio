import certifications from '../data/certifications.js'

function CertificationsSection() {
  return (
    <section className="page-section section-reveal" id="certifications" aria-labelledby="certifications-title" data-section-reveal>
      <div className="section-inner">
        <p className="eyebrow">Credentials</p>
        <h2 id="certifications-title">Certifications &amp; Badges</h2>
        <div className="certification-list">
          {certifications.map((item) => (
            <article className="certification-card surface" key={item.title}>
              <div className="certification-heading">
                <span className="cisco-mark" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></span>
                <div>
                  <p className="item-type">{item.provider} · Certification / Badge</p>
                  <h3>{item.title}</h3>
                </div>
              </div>
              <p className="certification-description">{item.description}</p>
              {item.verificationUrl && (
                <a className="button button-secondary" href={item.verificationUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${item.title} credential`}>
                  View Credential
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
