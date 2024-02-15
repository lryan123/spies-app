//components
import CardItem from './components/CardComponent/CardItem'

// css
import './Homepage.css'

//images
import haka from './assets/haka.jpg'
import annualDinner from './assets/IMG_5945 1.png'
import studentConference from './assets/20171018-68.jpg'
import sportsIMG from './assets/IMG_1336 1.png'
import secondHaka from './assets/haka2.jpg'
import wakaAma from './assets/wakaAma2024Group.jpg'
import sportsDay from './assets/sportsDay.jpg'

import wsp from './assets/image 1.png'
import beca from './assets/image 2.png'
import watercare from './assets/image 3.png'

function Homepage() {

  return (
    <div className='main-div'>

      <section className='title-section'>
        <img className='front-img' src={haka}/>
      </section>

      <section className='description-section'>
        <h2 className='description-section-header'>SPIES ON TOP!</h2>
        <p className='description-para'>
          <span className='bold-text'>South Pacific Indigenous Engineering Students (SPIES)</span>
          <span className='regular-text'>, stands as a dedicated student association within the esteemed University of Auckland. Our primary objective is to foster and facilitate the development of Māori and Pasifika engineering students as they embark on their university journey. With a steadfast commitment to inclusivity and empowerment, SPIES endeavors to provide a supportive environment that not only encourages academic excellence but also nurtures personal and cultural growth. </span>
        </p>
        <p className='description-quote'>
        “GROWING THE NEXT GENERATION OF 
        <br />
        MAORI AND PASIFIKA ENGINEERS”
        </p>
        <p className='reference'>
          - SPIES
        </p>
        <p className='description-para regular-text extra-margin'>
          Through a range of tailored programs, mentorship initiatives, and community-building activities, we aspire to be a catalyst for success, ensuring that every Māori and Pasifika engineering student flourishes both academically and personally during their time at the university. Join SPIES, where we celebrate diversity, promote unity, and pave the way for a future generation of thriving engineers from indigenous backgrounds.
        </p>
      </section>

      <section className='img-break-section'>
        <img className='side-imgs' src={annualDinner}/>
        <img className='middle-img' src={studentConference}/>
        <img className='side-imgs' src={sportsIMG}/>
      </section>
      
      <section className='slide-card-section'>
        <CardItem />
      </section>

      <section className='img-break-section'>
        <img className='side-imgs' src={sportsDay}/>
        <img className='middle-img' src={secondHaka}/>
        <img className='side-imgs' src={wakaAma}/>
      </section>

      <section className='partners-section'>
        <div className='partners-header'>
          <p className='partners-message'>BIG THANKS</p>
          <p className='partners-message'>TO OUR</p>
          <p className='partners-message'>PARTNERS!!!</p>
        </div>
        <div className='partner-logos-container'>
          <img className='partner-logos' src={wsp}/>
          <img className='partner-logos' src={beca}/>
          <img className='partner-logos' src={watercare}/>
        </div>
      </section>
      
    </div>
  )
}

export default Homepage
