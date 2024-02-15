import './Footer.css'
import blackandwhite from '../../assets/FINALpurpleNoboxblack.png'
import facebook from '../../assets/facebook.svg'
import insta from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import tiktok from '../../assets/tik-tok.svg'

export default function Footer() : JSX.Element {
    return (
        <footer>
            <div className="footer-content-container">
                <img className='spies-logo' src={blackandwhite} alt='black and white spies logo' />
                <div className="content-details">
                        <h2 className='header-of-details'>LOCATION</h2>
                        <p className='footer-para'>C/o Faculty of 
                        Engineering
                        20 Symonds St
                        Auckland 1010</p>
                    </div>
                <div className="content-details">
                        <h2 className='header-of-details'>CONTACT</h2>
                        <p className='footer-para'>EMAIL:</p>
                        <a className='footer-para social-link' href='mailto:spiesuoa@gmail.com'>spiesuoa@gmail.com</a>
                </div>
                <div className="content-details">
                        <h2 className='header-of-details'>SOCIAL MEDIA</h2>
                        <div className='social-media-grid'>
                            <a target='_blank' href='https://www.facebook.com/groups/uoa.spies' className='social-link'>
                                <div className='full-social-icon'>
                                    <img className='social-icons' src={facebook}/>
                                    <p className='social-names facebook-color'>FACEBOOK</p>
                                </div>
                            </a>
                            <a target='_blank' href='https://www.instagram.com/spiesuoa/' className='social-link'>
                                <div className='full-social-icon'>
                                    <img className='social-icons' src={insta}/>
                                    <p className='social-names insta-color'>INSTAGRAM</p>
                                </div>
                            </a>
                            <a target='_blank' href='https://www.linkedin.com/company/spiesuoa/' className='social-link'>
                                <div className='full-social-icon'>
                                    <img className='social-icons' src={linkedin}/>
                                    <p className='social-names linkedin-color'>LINKEDIN</p>
                                </div>
                            </a>
                            <a target='_blank' href='https://www.tiktok.com/@spiesuoa' className='social-link'>
                                <div className='full-social-icon'>
                                    <img className='social-icons' src={tiktok}/>
                                    <p className='social-names tiktok-color'>TIKTOK</p>
                                </div>
                            </a>
                </div>
                </div>
            </div>
            <div className="para-container">
                <p className="para-copyright">SPIES © South Pacific Indigenous Engineering Students 2020, All Rights Reserved</p>
            </div>
        </footer>
    )
}