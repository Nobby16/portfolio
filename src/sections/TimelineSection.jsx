import TimelineItem from '../components/TimelineItem.jsx'
import timeline from '../data/timeline.js'

function TimelineSection() {
  return (
    <section className="page-section section-reveal" id="journey" aria-labelledby="journey-title" data-section-reveal>
      <div className="section-inner">
        <p className="eyebrow">Education &amp; training</p>
        <h2 id="journey-title">Education &amp; Training</h2>
        <ol className="timeline-list">
          {timeline.map((item) => <TimelineItem item={item} key={item.title} />)}
        </ol>
      </div>
    </section>
  )
}

export default TimelineSection
