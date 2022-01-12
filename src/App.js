import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useEffect} from 'react';
import { onForegroundMessage } from './firebase';

import Geolocation from './Geolocation';
import ScrollTop from './Components/ScrollTop';

import routes from './routes'

function App() {

  useEffect(()=>{
    Geolocation()
    onForegroundMessage()
  },[])

  return (
    <BrowserRouter>
      <ScrollTop>
        <Routes>
            {
              routes.map(({path, element}, i) => <Route key={i} path={path} element={element} />)
            }
        </Routes>
      </ScrollTop>
    </BrowserRouter>
  )
}

export default App;
