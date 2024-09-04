import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import Logement from "./pages/Logement/Logement"
import About from "./pages/About/About"
import NotFound from "./pages/NotFound/NotFound"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/logement/:id' element={<Logement />}/>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
