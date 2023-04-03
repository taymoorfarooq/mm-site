import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";


import './styles/App.css'

function App() {
  return (
      <>
      {/* <Navbar /> */}
      <div className="container">
          <Routes>
              <Route path="/" element={<About/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="*" element={<PageNotFound />} />
          </Routes>
      </div>

      </>
      
  )
}

export default App;
