import TimelineData from '../data/timelineData.json'
import TimelineItem from './TimelineItem'
import './Timeline.css'

type TimelineData = {
    text: string
    date: string
    icon: string
}

function Timeline() {
    return TimelineData.length > 0 && (
        <section className="timeline-container">
            {TimelineData.map((data: TimelineData, idx: number) => (
                <TimelineItem text={data.text} date={data.date} icon={data.icon} key={idx} />
            ))}
        </section>
    )
}

export default Timeline