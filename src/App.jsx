import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import TermsConditionsPage from './Terms'
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<TermsConditionsPage />} />
      </Routes>
    </Router>
  )
}
