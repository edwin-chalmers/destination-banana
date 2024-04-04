
import './App.css';
import WikiPage from '../WikiPage/WikiPage'
import LinkBox from '../LinkBox/LinkBox'
import { fetchPage } from '../../ApiCalls';
import { useEffect, useState } from 'react'
import parse from 'html-react-parser';


function App() {
  const [currentPage, setCurrentPage] = useState({})
  const [linkList, setLinkList] = useState([])
  // const [infoBox, setInfoBox] = useState('')

  useEffect(() => {
    updateCurrentPage('banana')
  }, [])

  function updateCurrentPage(endpointText) {
    const parser = new DOMParser()
    const endpoint = endpointText.replaceAll(' ', '_')
    fetchPage(endpoint)
      .then(response => {
        return response.text()
      })
      .then(html => {
        
        const parsedHTMLforLinks = parser.parseFromString(html, 'text/html')
        // const newBox = parsedHTMLforLinks.querySelector('.infobox').innerHTML.toString()
        // const parsedHTMLforDOM = parse(newBox)  
        const parsedHTMLforDOM = parse(html)  
        
        // console.log("parsedHTML", parsedHTML)
        // setCurrentPage({stringForLinks: parsedHTMLforLinks, stringForDOM: parsedHTMLforDOM})
        setCurrentPage({stringForLinks: parsedHTMLforLinks, stringForDOM: parsedHTMLforDOM})
        createLinkList(parsedHTMLforLinks)
      })
  }

  // useEffect(() => {
  //   if(currentPage.stringForLinks) {
  //     createLinkList(currentPage.stringForLinks)
  //   }
  // }, [currentPage])

  function createLinkList (htmlString) {
    const wikiLinks = []
    const linkNodes = htmlString.querySelectorAll('a')
    linkNodes.forEach((linkNode) => {
      if (linkNode.href.includes('wikipedia')) {
        wikiLinks.push(linkNode.href.split('/').slice(-1).toString().replaceAll('_', ' '))
      }
    })
    const filterArray = ['(identifier)','FOOTNOTE','File','#', 'cite_note', '-', '%', 'FOOTNOTES', '.', ':', 'jpg']
    const filteredWikiLinks = []
    filterArray.forEach(filter => {
        wikiLinks.forEach((link) => {
            
            if(link.includes(filter)){
              const linkIndex = wikiLinks.indexOf(link)
              wikiLinks.splice(linkIndex, 1)
            }
        })
    })
    filterArray.forEach(filter => {
      wikiLinks.forEach((link) => {
          
          if(link.includes(filter)){
            const linkIndex = wikiLinks.indexOf(link)
            wikiLinks.splice(linkIndex, 1)
          }
      })
    })

 

    window.filteredLinks = filteredWikiLinks
    console.log('filteredwikilinks',filteredWikiLinks)

    wikiLinks.forEach((link) => {

      link.replace('_', ' ')
    })

    setLinkList(wikiLinks)
  }
  

  return (
    <main>
      <WikiPage pageHTML={currentPage.stringForDOM} />
      <LinkBox linkList={linkList} updateCurrentPage={updateCurrentPage}/>
    </main>
  );
}

export default App;



