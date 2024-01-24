import { Route, Routes } from "react-router-dom"
import Homepage from "./Homepage"
import AboutPage from "./AboutPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import OutreachPage from "./OutreachPage"

function App() {
    
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/AboutUs" element={<AboutPage />}/>
                <Route path="/OutReach" element={<OutreachPage />}/>
            </Routes>

            <Footer />
        </>
    )
    
  }
  
  export default App;