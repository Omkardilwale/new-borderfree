import './App.css';
import Homepagee from './components/Homepagee';
import Summery from './components/Summery';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [prod,setProd]=useState(null)   

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepagee setProd={setProd}/>}></Route>
        <Route path='/summery' element={<Summery prod={prod}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
