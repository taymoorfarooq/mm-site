import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import About from "./components/About";


import './styles/App.css'

function App() {
  return (
      <>
      <Navbar />
      <div className="container">
          <Routes>
              <Route path="/" element={<About/>}/>
              <Route path="*" element={<About />} />
          </Routes>
      </div>

      </>
      
  )
}

export default App;
