import './App.css';
import {LandingPage} from '../LandingPage/LandingPage'
import {HomePage} from '../HomePage/HomePage'
import {Error} from '../Error/Error'
import {Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import WordGame from '../HelpPage/HelpPage';
import HelpPage from '../HelpPage/HelpPage';


function App() {

  const [error, setError] = useState(false)

  return (
    <div id='app-parent'>
      {/* <Error /> */}
      <Routes>
        <Route path='/Error' element={<Error />} />
        <Route path='*' element={<Error error='*'/>} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/HomePage' element={<HomePage setError={setError}/>} />
        <Route path='/Help' element={<HelpPage/>} />      
      </Routes>
    </div>

  );
}

export default App;



