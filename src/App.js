
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import './App.css';
import NavbarComponent from './components/navbarComponent';
import Home from './components/home';
import SignupForm from './components/signup';
import Signin from './components/signin';

import Contactus from './components/contactus'
import Aboutus from './components/aboutus';

function App() {
  return (
    <div className="App">
      <Router>
      < NavbarComponent />
        <Routes>
          {/* <Route path='/' element={}/> */}
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<SignupForm/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/contact' element={<Contactus/>} />
          <Route path='/about' element={<Aboutus/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
