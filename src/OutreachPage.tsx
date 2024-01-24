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
                <div className='transparent-container'>
                    <p className='transparent-text'>
                    SPIES is a University of Auckland, student-led association dedicated to supporting Māori and Pacific Island students studying engineering at the University of Auckland. Outside of the University, SPIES aims to promote engineering to all of our aiga, to help increase the Māori and Pasifika presence within the engineering industry. 
                    <br />
                    SPIES is actively involved within the faculty of engineering, university and the community. To encourage students to be more involved during their time at university, SPIES organises events and workshops which build the students' character through a friendly and supportive environment.
                    <br />
                    With a 200+ member cohort, and increasing numbers each year, SPIES wants to invest in these students and help them in every way possible. We realise the importance of teamwork and making connections with the wider engineering community; and understand that our members need help in taking the first step towards building a professional profile for themselves.
                    </p>
                </div>
            </section>
        </>
    )
}

export default OutreachPage