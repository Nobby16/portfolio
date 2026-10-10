function TimelineItem({ item }) {
  return (
    <li className="timeline-item">
      <span className="timeline-marker" aria-hidden="true" />
      <article className="timeline-card surface">
        <div className="timeline-card-heading">
          <div>
            <h3>{item.title}</h3>
            <p className="timeline-context">{item.organization}<span aria-hidden="true"> · </span>{item.status}</p>
          </div>
          <time className="timeline-date">{item.period}</time>
        </div>
        <p className="timeline-description">{item.description}</p>
      </article>
    </li>
  )
}

export default TimelineItem
