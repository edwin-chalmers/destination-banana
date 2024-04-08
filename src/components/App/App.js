import './App.css';
// import WikiPage from '../WikiPage/WikiPage'
import {LandingPage} from '../LandingPage/LandingPage'
import {HomePage} from '../HomePage/HomePage'
import {Stats} from '../Stats/Stats'
import {Error} from '../Error/Error'
import {Route, Routes} from 'react-router-dom'


function App() {

  return (
    <>
      <Error />
      <Routes>
        <Route path='/Error' element={<Error />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/Stats' element={<Stats />} />
      </Routes>
    </>

  );
}

export default App;



