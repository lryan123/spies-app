import './HistoryPage.css'
import Timeline from './components/TimelineComponent/Timeline'

function HistoryPage() {
    return (
        <>
            <section className='history-header-container'>
                <div className='history-title-container'>
                    <h2 className='history-title'>OUR HISTORY</h2>
                    <p className='sub-title'>SPIES 1993</p>
                </div>
            </section>

            <Timeline />

        </>
    )
}

export default HistoryPage