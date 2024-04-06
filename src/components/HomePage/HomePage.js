import styled from 'styled-components'
import PagesContainer from '../PagesContainer/PagesContainer';
import LinkBox from '../LinkBox/LinkBox'
import Toolbar from '../Toolbar/Toolbar'
import { fetchPage, fetchHTML } from '../../ApiCalls';
import { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import { Link } from 'react-router-dom'
import { StyledHeader } from './HomePage.styled';

function HomePage({}) {

    const [pages, setPages] = useState([])
    const [linkList, setLinkList] = useState([])
    const [nextId, setNextId] = useState(1)
  
  
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
  
    function updatePages(endpointText) {
      createLinkList(endpointText)
  
      const parser = new DOMParser()
      fetchHTML(endpointText).then(html => {
        const htmlFilter = parser.parseFromString(html, 'text/html').querySelector('body > section').outerHTML
        const parsedHTML = parse(htmlFilter)
        const newPage = {
          id: nextId,
          stringForDOM: parsedHTML,
          isCurrent: true,
          isDisplayed: true,
          title: endpointText
        }
        setNextId(prev => prev += 1)
        setPages((prev) => {
          const updatedPages = prev.map((page) => {
            page.isCurrent = false
            
            return page
          })
          
          return [...updatedPages, newPage]
        })
      })
    }

    function cleanupHTML() {
      document.querySelectorAll('img').forEach((img) => {
        if(img.src.includes('Red_pog')){
            img.remove()
        }
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
  
    function focusPage(id) {
      let selectedPage;
  
      if(!id) {
        const currentPage = pages.find(page => page.isCurrent)
        const previousPage = pages.reduce((prevPage, page) => {
          if(page.id < currentPage.id && page.isDisplayed) {
            prevPage = page
          }
  
          return prevPage
        }, {})
  
          selectedPage = previousPage
        } else {
            selectedPage = pages.find((page) => {
              return page.id === id
            })
        }
  
      const updatedPages = pages.map((page) => {
        if(page.id > selectedPage.id) {
          page.isDisplayed = false
        }
        page.isCurrent = false
        if(page.id === selectedPage.id) {
          page.isCurrent = true
        }
  
        return page;
      })
      cleanupHTML()
      createLinkList(selectedPage.stringForLinks)
      setPages(updatedPages)
    }

    return (
      <>
        <StyledHeader >
          <img src='/assets/wikilinks-logo.svg' className='siteLogo' alt='wikiLinks site logo'/>
        </StyledHeader>
        <Toolbar focusPage={focusPage}/>
        <main id='mainContent'>
          <div>
            <LinkBox linkList={linkList} updatePages={updatePages}/>
          </div>
          <div id='pages'>
            <PagesContainer pages={pages} focusPage={focusPage} />
          </div>
        </main>
      </>
    )
    
}

export { HomePage }