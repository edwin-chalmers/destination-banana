import './App.css';
// import WikiPage from '../WikiPage/WikiPage'
import {LandingPage} from '../LandingPage/LandingPage'
import {HomePage} from '../HomePage/HomePage'
import {Error} from '../Error/Error'
import {Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import WordGame from '../WordGame/WordGame';


function App() {

  const [error, setError] = useState(false)

  return (
    <>
      {/* <Error /> */}
      <Routes>
        <Route path='/Error' element={<Error />} />
        <Route path='*' element={<Error error='*'/>} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/HomePage' element={<HomePage setError={setError}/>} />
        <Route path='/WordGame' element={<WordGame/>} />      
      </Routes>
    </>

  );
}

export default App;



