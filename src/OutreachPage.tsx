import Header from './components/Header'
import './OutreachPage.css'

import OutReachOne from './assets/OutReach(1).jpg'

const titleString: string = "SPIES SI'I OUTREACH"
const paraString: string = `SI'I is a SPIES, student-run Outreach initiative lead by our Outreach Officer and a team of our most passionate members; all of whom firmly believe that informing our communities of engineering will pave the way for a better, more equitable future.\n Si'i in Samoan means to raise, lift or elevate. For SPIES, it also stands for 'Seek to Inform and Inspire'. Our goal is to empower, uplift and inspire our young Māori and Pasifika peoples to seek beyond the heights of their imagination.\n Lutu na niu, lutu ki vuna - the coconut falls close to it's roots (Fijian proverb). The truth of the matter is that many of our youth do not have doctors, lawyers or engineers in their families to look up to. We hope to be that role model for them.`

function OutreachPage() {
    const paragraphs = paraString.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ));

    return (
        <>
            <Header title={titleString} para={paragraphs}/>

            <section className='outreach-info-section'>
                <img className='outreach-img-one' src={OutReachOne} />
            </section>
        </>
    )
}

export default OutreachPage