import './App.css';
// import WikiPage from '../WikiPage/WikiPage'
import PagesContainer from '../PagesContainer/PagesContainer';
import LinkBox from '../LinkBox/LinkBox'
import { fetchPage } from '../../ApiCalls';
import { useEffect, useState } from 'react'
import parse from 'html-react-parser';


function App() {
  const [pages, setPages] = useState([])
  const [linkList, setLinkList] = useState([])
  const [id, setId] = useState(1)
  
  // const [infoBox, setInfoBox] = useState('')
  
  // { id: 4,
  //   stringForLinks: parsedHTMLforLinks,
  //   stringForDOM: parsedHTMLforDOM,
  //   isDisplayed: false,
  //   isCurrent: true,
  //   title: 'Tom Cruise'
  // }


  useEffect(() => {
    updatePages('banana')
  }, [])

  function updatePages(endpointText) {
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

        
        // setPages({stringForLinks: parsedHTMLforLinks, stringForDOM: parsedHTMLforDOM})
        const newPage = {
          id: id,
          stringForLinks: parsedHTMLforLinks,
          stringForDOM: parsedHTMLforDOM,
          isCurrent: true,
          isDisplayed: true,
          title: endpoint
        }

        console.log("parsedHTML", newPage)
        setPages(prev => [newPage, ...prev])
        setId(prev => prev += 1)
        createLinkList(parsedHTMLforLinks)
      })
  }

  // useEffect(() => {
  //   if(pages.stringForLinks) {
  //     createLinkList(pages.stringForLinks)
  //   }
  // }, [pages])

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
      <LinkBox linkList={linkList} updatePages={updatePages}/>
      <PagesContainer pages={pages} />
    </main>
  );
}

export default App;



