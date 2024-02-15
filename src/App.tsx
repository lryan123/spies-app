import { Route, Routes } from "react-router-dom"
import Homepage from "./Homepage"
import AboutPage from "./AboutPage"
import Navbar from "./components/NavbarComponent/Navbar"
import Footer from "./components/FooterComponent/Footer"
import OutreachPage from "./OutreachPage"
import HistoryPage from "./HistoryPage"

function App() {
    
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/AboutUs" element={<AboutPage />}/>
                <Route path="/Students" element={<HistoryPage />} />
                <Route path="/OutReach" element={<OutreachPage />}/>
            </Routes>

            <Footer />
        </>
    )
    
  }
  
  export default App;