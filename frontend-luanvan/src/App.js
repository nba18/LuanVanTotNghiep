import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Loginpage from './layouts/loginpage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage />}/>;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
