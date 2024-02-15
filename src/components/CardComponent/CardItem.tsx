import { useState } from 'react'
import './CardItem.css'
import props from '../../data/testimonials.json'
import arrowButton from '../../assets/arrow-circle-right.svg'
import wholeSpies from '../../assets/WholeSpies.jpg'
import flagSpies from '../../assets/aboutUs.jpg'
import stanAnnualDinner from '../../assets/25th annual stan.jpg'
import outreach from '../../assets/Outreach.jpg'
import team from '../../assets/ourTeam.jpg'
import alumni from '../../assets/alumni.jpg'
import { Link } from 'react-router-dom'

export default function CardItem(): JSX.Element {
    const [activeIndex, setActiveIndex] = useState(0)

    function handleNextSlide() {
        setActiveIndex(prevIndex => (prevIndex < 5 ? prevIndex + 1 : prevIndex))
    }
    
    function handlePrevSlide() {
        setActiveIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0))
    }

    function getImage(title: string): any {
        switch (title) {
            case 'ABOUT US':
                return flagSpies
            case 'STUDENTS':
                return wholeSpies
            case "SI'I OUTREACH":
                return outreach
            case "OUR PARTNERS":
                return stanAnnualDinner
            case "OUR ALUMNI":
                return alumni
            case "OUR TEAM":
                return team
        }
    }

    return (
        <>
        <button onClick={handlePrevSlide} className="carousel__btn">
            <img className='img-button rotated-button' src={arrowButton}/>
        </button>
        <div className='content-container'>
            <div className='description-container'>
                <h2 className='card-header'>
                    {props[activeIndex]['title']}
                </h2>
                <p className='card-para'>
                {props[activeIndex]['content']}
                </p>
                <Link to={`${props[activeIndex]["link"]}`}><button className='link-button'>LEARN MORE</button></Link>
            </div>
            <img className='card-img' src={getImage(props[activeIndex]['title'])} alt='Card Image' />
        </div>
        <button onClick={handleNextSlide} className="carousel__btn">
            <img className='img-button' src={arrowButton}/>
        </button>
        </>
    )
}
