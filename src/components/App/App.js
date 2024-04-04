
import './App.css';
import WikiPage from '../WikiPage/WikiPage'
import { fetchPage } from '../../ApiCalls';
import { useEffect, useState } from 'react'
import parse from 'html-react-parser';


function App() {
  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    fetchPage('banana')
      .then(response => {
        return response.text()
      })
      .then(html => {
        const parsedHTML = parse(html)
        setCurrentPage(parsedHTML)
      })
  }, [])

  function createLinkList () {
    
  }

  return (
    <>
      <WikiPage pageHTML={currentPage} />
      <LinkBox links={linkList}/>
    </>
  );
}

export default App;