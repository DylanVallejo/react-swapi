
import './App.css';
import React from 'react';
import {Route, BrowserRouter,Routes} from 'react-router-dom';

import DexForce from './components/Skywalker';
import Single from './components/people'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<DexForce/>} />
          <Route path="/:idPeople" element={<Single/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
