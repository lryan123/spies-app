import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() : JSX.Element {

    return (
        <nav className="navbar">
            <div className="header-container">
                <div className='nav-title'>
                    <h1>SOUTH PACIFIC INDIGENOUS</h1>
                    <br/>
                    <h1 className='center-title'> ENGINEERING STUDENTS</h1>
                </div>
            </div>
            <input type='checkbox' id='menu-checkbox' />
            <label htmlFor="menu-checkbox"/>
            <div className="navbar-buttons-container">
                <Link to="/"><button className="selected-navbar-button">SPIES UOA</button></Link>
                <Link to="/AboutUs"><button className="navbar-button">ABOUT US</button></Link>
                <button className="navbar-button">STUDENTS</button>
                <Link to="/OutReach"><button className="navbar-button">OUTREACH</button></Link>
                <button className="navbar-button">OUR PARTNERS</button>
                <button className="navbar-button">OUR ALUMNI</button>
                <button className="navbar-button">OUR TEAM</button>
            </div>
        </nav >
    )
}