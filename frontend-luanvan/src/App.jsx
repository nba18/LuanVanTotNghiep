import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Loginpage from './layouts/loginpage';
import Hockypage from './layouts/hockypage';
import Detaipage from './layouts/detaipage';
import Dsdetaipage from './layouts/dsdetaipage';
import Registerpage from './layouts/registerpage';
import Loginpage from './layouts/loginpage';

import Dsdetaicanhan_page from './layouts/dsdetaicanhan_page';
import Xetduyetdetai_page from './layouts/xetduyetdetai_page';
import Hosocanhan_page from './layouts/hosocanhan_page';
import Detaitonghoppage from './layouts/detaitonghoppage';
import Dsdetaicongbo_page from './layouts/dsdetaicongbo_page';
import Dangkydetai_page from './layouts/dangkydetai_page';
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
        {/* <Route path={`/sua/:detaiid`}element={<Chitietdetaipage />} />; */}
        <Route path='/duyetdetai' element={<Xetduyetdetai_page />} />
        <Route path='/detaicongbo' element={<Dsdetaicongbo_page />} />
        <Route path='/dangkydetai' element={<Dangkydetai_page />} />
        <Route path={`/detai/:detaiid`}element={<Dsdetaicanhan_page />} />;
        <Route path='/hoso' element={<Hosocanhan_page />} />;
        <Route path='/detaitonghop' element={<Detaitonghoppage />} />;
      </Routes>

    </BrowserRouter>
  );
}

export default App;
