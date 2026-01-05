import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SignupPage from './pages/siginup';
import Sigin from './pages/sigin';
import SettingsPage from './pages/settings';
export default function Page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path='/signin'element={<Sigin/>}/>
        <Route path='/settings'element={<SettingsPage/>}/>
      </Routes>    
    </BrowserRouter>
   
  )
}
