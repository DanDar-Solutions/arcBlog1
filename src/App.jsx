import NavBar from "./component/set/navbar/NavBar.jsx"
import Footer from "./component/set/footer/Footer.jsx"

import Contents from "./component/pages/contents/Content.jsx"
import Projects from "./component/pages/projects/Projects.jsx"
import Customize from "./component/pages/customize/Customize.jsx"
import About from "./component/pages/about/About.jsx"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App(){
    return(
        <Router>
            <div className="app-wrapper">
                <NavBar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={
                            <div className="content-container">
                                <Contents/>
                                <Contents title="Track:1" discription="lorem" date="2025.4.12"/>
                            </div>
                        } />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/customize" element={<Customize />} />
                    </Routes>

                    
                </main>
                <Footer />
            </div>
        </Router>
    );
}
export default App