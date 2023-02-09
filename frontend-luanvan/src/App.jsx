import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Loginpage from './layouts/loginpage';
import Hockypage from './layouts/hockypage';
import Detaipage from './layouts/detaipage';
import Dsdetaipage from './layouts/dsdetaipage';
import Registerpage from './layouts/registerpage';
import Loginpage from './layouts/loginpage';
import Chitietdetaipage from './layouts/chitietdetaipage';
// import Dashboard from './components/dashboard';
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<Loginpage />} />;
        <Route path='/register' element={<Registerpage />} />;
        <Route path='/hocky' element={<Hockypage />} />;
        <Route path='/detai' element={<Detaipage />} />;
        <Route path='/dsdetai' element={<Dsdetaipage />} />;
        <Route path={`/detai/:detaiid`}element={<Chitietdetaipage />} />;
      </Routes>

    </BrowserRouter>
  );
}

export default App;
