import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutus from './Pages/Aboutus'
import MainPage from './Pages/MainPage'

function App() {
  
  return (
    <>
  
    <Router>
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
