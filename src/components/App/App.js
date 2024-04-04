
import './App.css';
import WikiPage from '../WikiPage/WikiPage'
import LinkBox from '../LinkBox/LinkBox'
import { fetchPage } from '../../ApiCalls';
import { useEffect, useState } from 'react'
import parse from 'html-react-parser';


function App() {
  const [currentPage, setCurrentPage] = useState({})
  const [linkList, setLinkList] = useState([])

  useEffect(() => {
    const parser = new DOMParser()
    fetchPage('banana')
      .then(response => {
        return response.text()
      })
      .then(html => {
        const parsedHTMLforLinks = parser.parseFromString(html, 'text/html')
        const parsedHTMLforDOM = parse(html)  
        // console.log("parsedHTML", parsedHTML)
        setCurrentPage({stringForLinks: parsedHTMLforLinks, stringForDOM: parsedHTMLforDOM})
        createLinkList(parsedHTMLforLinks)
      })
  }, [])

  // useEffect(() => {
  //   if(currentPage.stringForLinks) {
  //     createLinkList(currentPage.stringForLinks)
  //   }
  // }, [currentPage])

  function createLinkList (htmlString) {
    const wikiLinks = []
    const linkNodes = htmlString.querySelectorAll('a')
    const wikiNodes = linkNodes.forEach((linkNode) => {
      if (linkNode.href.includes('wikipedia')) {
        wikiLinks.push(linkNode.href)
      }
    })
    setLinkList(wikiLinks)
  }

  return (
    <main>
      <WikiPage pageHTML={currentPage.stringForDOM} />
      <LinkBox linkList={linkList}/>
    </main>
  );
}

export default App;