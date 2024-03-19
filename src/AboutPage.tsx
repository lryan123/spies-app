import Header from './components/HeaderComponent/Header'

import kava from './assets/IMG_3047.jpg'
import academic from './assets/IMG_5983.jpg'
import social from './assets/IMG_0082.jpg'
import './AboutPage.css';

const titleString: string = "WHANAUNGATANGA";
const paraString: string = `If there was one word to describe SPIES, it would be “whanaungatanga”.​ For students studying with us today, we hope that we can provide a home away from home.\nFor the future, we envisage a world where our people thrive in the engineering workforce and are able to pave the way for more to come. We aspire to help our people realize their potential and go on to change the world. We are a minority in this industry, however, we accept the challenge that comes with it.`;

function AboutPage() {
  const paragraphs = paraString.split('\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <div className='main'>
      <Header title={titleString} para={paragraphs} />

      <section className="about-us-info-section">
              <div className="about-us-background-image-one"></div>
              <div className="overlay-container">
                  <div className="overlay-content">
                    <p className='transparent-text'>
                      ​SPIES is a University of Auckland, student-led association dedicated to supporting Māori and Pacific Island students studying engineering at the University of Auckland. Outside of the University, SPIES aims to promote engineering to all of our aiga, to help increase the Māori and Pasifika presence within the engineering industry.
                    <br/>
                    <br/>
                    SPIES is actively involved within the faculty of engineering, university and the community. To encourage students to be more involved during their time at university, SPIES organises events and workshops which build the students' character through a friendly and supportive environment.
                    <br/>
                    <br/>
                    With a 200+ member cohort, and increasing numbers each year, SPIES wants to invest in these students and help them in every way possible. We realise the importance of teamwork and making connections with the wider engineering community; and understand that our members need help in taking the first step towards building a professional profile for themselves.
                    </p>
                  </div>
              </div>
        </section>

        <section className="about-us-info-section">
              <div className="about-us-background-image-two"></div>
              <div className="overlay-container">
                  <div className="overlay-content-purple">
                    <p className='transparent-text-white'>
                    The number of SPIES graduates grows every year, working nationally and internationally at a high level. We believe, from the success of our graduates, that the programmes and support offered by SPIES is of great significance. Coupled with industry assistance, we continue to make a difference in the lives of young Māori and Pacific engineers. 
                    <br/>
                    <br/>
                    ​While an engineering degree is hard work, SPIES makes life a little more enjoyable.
                    </p>
                  </div>
              </div>
        </section>

        <header className='objective-header-container'>
          <h1 className='objective-header'>OUR OBJECTIVES</h1>
        </header>

        <section className='first-objective-container'>
          <h2 className='first-objective-header'>1. Support the well-being of Our Members</h2>
          <div className='objective-one-content'>
              <div className='goal-container'>
                <img src={social} className='goal-image'/>
                <h3 className='goal-header'>SOCIAL</h3>
                <p className='goal-text'>
                  During their time at University, SPIES aims to support our members socially through a range of events, activities and experiences. We aim to create a sense of family and community for them; a place to call home within the university.
                </p>
              </div>

              <div className='goal-container'>
                <img src={academic} className='goal-image'/>
                <h3 className='goal-header'>ACADEMIC</h3>
                <p className='goal-text'>
                  One of the prime reasons that each of us are here, SPIES works to support each of our members on their academic journeys. Through networking, professional development workshops and study sessions, we aim to help each other succeed.
                </p>
              </div>

              <div className='goal-container'>
                <img src={kava} className='goal-image'/>
                <h3 className='goal-header'>CULTURAl</h3>
                <p className='goal-text'>
                  SPIES is comprised of a multitude of cultures and we provide various opportunities for our members to learn more about their own cultures, as well as others. SPIES aims to strengthen our members' sense of identity within the Faculty of Engineering and the University of Auckland.
                </p>
              </div>
          </div>
        </section>

        <section className='second-objective-container'>
          <h2 className='second-objective-header'>1. Support the well-being of Our Members</h2>
          <div>

          </div>
        </section>
      
    </div>
  );
}

export default AboutPage;
