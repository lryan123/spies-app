import './TimelineItem.css'

type TimelineData = {
    text: string
    date: string
    icon: string
}

function TimelineItem( { text, date, icon } : TimelineData) : JSX.Element {

    return (
        <div className="timeline-item">
            <div className='timeline-item-content'>
                <img className="tag" src={`${icon}`}>
                </img>
                <time>{date}</time>
                <p className='content-text'>{text}</p>
                <span className="circle" />
            </div> 
        </div>
    )
}

export default TimelineItem
