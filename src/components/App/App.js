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
  const [nextId, setNextId] = useState(1)
  
  // const [infoBox, setInfoBox] = useState('')

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
        console.log({nextId})
        const newPage = {
          id: nextId,
          stringForLinks: parsedHTMLforLinks,
          stringForDOM: parsedHTMLforDOM,
          isCurrent: true,
          isDisplayed: true,
          title: endpoint
        }

        setNextId((prev) => {
          const newId = prev + 1

          return newId
        })
        setPages(prev => [...prev, newPage])
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

    wikiLinks.forEach(link =>  link.replace('_', ' ') )

    setLinkList(wikiLinks)
  }

  function focusPage(id) {
    console.log('pages inside focusPages', pages)
    console.log('id', id)
    const selectedPage = pages.find((page) => {
      return page.id = id
    })

    const updatedPages = pages.map((page) => {
      console.log('page.id', page.id)
      if(page.id > id) {
        page.isDisplayed = false
      }

      return page;
    })


    createLinkList(selectedPage.stringForLinks)
    // console.log("updatedPages", updatedPages)
    setPages(updatedPages)
  }
  

  return (
    <main>
      <LinkBox linkList={linkList} updatePages={updatePages}/>
      <PagesContainer pages={pages} focusPage={focusPage} />
    </main>
  );
}

export default App;



