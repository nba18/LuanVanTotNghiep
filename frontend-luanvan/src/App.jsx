import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Loginpage from './layouts/loginpage';
import Homepage from './layouts/homepage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage />}/>;
        <Route path='/home' element={<Homepage />}/>;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
