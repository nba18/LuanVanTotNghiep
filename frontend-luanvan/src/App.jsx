import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Loginpage from './layouts/loginpage';
import Hockypage from './layouts/hockypage';
import Detaipage from './layouts/detaipage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage />}/>;
        <Route path='/hocky' element={<Hockypage />}/>;
        <Route path='/detai' element={<Detaipage />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
