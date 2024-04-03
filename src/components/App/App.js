import './App.css';
import { fetchPage } from '../../ApiCalls';
import { useEffect, useState } from "react" 

function App() {
  const parser = new DOMParser()
  const [currentPage, setCurrentPage] = useState('')
  
  useEffect(() => {
    fetchPage('gene%20wilder')
      .then(response => {
        const pageCode = parser.parseFromString(response, 'text/html')
        setCurrentPage(pageCode)
      })
  }, [])

  return (
    <div>
      {currentPage}
    </div>
  );
}

export default App;
