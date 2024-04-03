
import './App.css';
import { fetchPage } from '../../ApiCalls';
import { useEffect, useState } from 'react'

function App() {
  const parser = new DOMParser()
  const [currentPage, setCurrentPage] = useState('')
  useEffect(() => {
    fetchPage('banana')
      .then(response => {
        response.text()
        .then(html => {
          const pageCode = parser.parseFromString(html, 'text/html')
          setCurrentPage(pageCode)
        })
      })
  }, [])
  return (
    <div>
      {currentPage}
    </div>
  );
}

export default App;