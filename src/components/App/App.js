
import './App.css';
import WikiPage from '../WikiPage/WikiPage'
import { fetchPage } from '../../ApiCalls';
import { useEffect, useState } from 'react'



function App() {
  const parser = new DOMParser()
  const [currentPage, setCurrentPage] = useState('')
  useEffect(() => {
    fetchPage('banana')
      .then(response => {
        return response.text()
      })
      .then(html => {
        
        const pageCode = parser.parseFromString(html, 'text/html')
        console.log('pageCode.body.innerHTML', pageCode.body.innerHTML)
        setCurrentPage(pageCode.body.innerHTML)
      })
  }, [])

  return (
    <WikiPage pageHTML={currentPage} />
  );
}

export default App;