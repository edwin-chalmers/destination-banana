import './App.css';
// import WikiPage from '../WikiPage/WikiPage'
import PagesContainer from '../PagesContainer/PagesContainer';
import LinkBox from '../LinkBox/LinkBox'
import { fetchPage, fetchHTML } from '../../ApiCalls';
import { useEffect, useState } from 'react'
import parse from 'html-react-parser';


function App() {
  const [pages, setPages] = useState([])
  const [linkList, setLinkList] = useState([])
console.log('pages', pages)
  // const [nextId, setNextId] = useState(1)
  // const [infoBox, setInfoBox] = useState('')



  useEffect(() => {
    let endpointAPI
    if(!endpointAPI){
      fetch('https://en.wikipedia.org/api/rest_v1/page/random/title').then(rando => {
        return rando.json()
      }).then(data => {
        endpointAPI = data.items[0].title.replaceAll('_', ' ').toString()
        updatePages(endpointAPI)
      })
    } else {
      updatePages(endpointAPI)
    }
  }, [])

  useEffect(() => {

  }, [])

  function updatePages(endpointText) {
    createLinkList(endpointText)

    const parser = new DOMParser()
    const html = fetchHTML(endpointText).then(html => {
      const htmlFilter = parser.parseFromString(html, 'text/html').querySelector('body').outerHTML
      const parsedHTML = parse(htmlFilter)
      const newPage = {
        id: Date.now(),
        stringForDOM: parsedHTML,
        isCurrent: true,
        isDisplayed: true,
        title: endpointText
      }
      setPages((prev) => {
        const updatedPages = prev.map((page) => {
          page.isCurrent = false

          return page
        })
        
        return [...updatedPages, newPage]
      })
    })
  }


  function createLinkList(endpointText) {
    let charactersToRemove = ['_', '-', '%', ":", 'Help', 'Template', 'Portal']
    let filteredWikiLinks
    fetchPage(endpointText).then(linksArray => {
      filteredWikiLinks = linksArray.filter(link => {
        return !charactersToRemove.some(character => link.title.includes(character));
      })
      setLinkList(filteredWikiLinks)
    })
  }


  // useEffect(() => {
  //   if(pages.stringForLinks) {
  //     createLinkList(pages.stringForLinks)
  //   }
  // }, [pages])


  function focusPage(id) {
    console.log('pages inside focusPages', pages)
    console.log('id', id)
    const selectedPage = pages.find((page) => {
      return page.id === id
    })

    const updatedPages = pages.map((page) => {
      if(page.id > id) {
        page.isDisplayed = false
      }
      page.isCurrent = false
      if(page.id === id) {
        page.isCurrent = true
      }

      return page;
    })
    console.log('updatedPages', updatedPages)


    createLinkList(selectedPage.stringForLinks)
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



