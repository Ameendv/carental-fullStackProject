
import React from 'react';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import CarsList from './pages/CarsList';

function App() {
  return (
    <div className="App">
     
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/signup' exact element={<Signup />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/carslist' exact element={<CarsList />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
