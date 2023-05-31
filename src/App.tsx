import Navbar from './Navbar'
import Login from './Login'
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Security from './Security'
import Secure from './Secure'
import Success from './Success'
import Enter from './Enter'



function App() {


  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} children={undefined} />
        <Route path="/success" element={<Success />} children={undefined}/>
        <Route path="/secure" element={<Secure />} children={undefined} />
        <Route path="/" element={<Security />} children={undefined} />
        <Route path="/enter" element={<Enter />} children={undefined} />   
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
