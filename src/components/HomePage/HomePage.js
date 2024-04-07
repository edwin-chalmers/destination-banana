import styled from 'styled-components'
import PagesContainer from '../PagesContainer/PagesContainer';
import LinkBox from '../LinkBox/LinkBox'
import Toolbar from '../Toolbar/Toolbar'
import { fetchPage, fetchHTML } from '../../ApiCalls';
import { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import { Link } from 'react-router-dom'
import { StyledHeader } from './HomePage.styled';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';
import InertiaPlugin from 'gsap-trial/InertiaPlugin'
gsap.registerPlugin(Draggable, InertiaPlugin);
gsap.config({trialWarn: false})

function HomePage({}) {

  // Draggable.create("#pages", {
  //   type: "x,y", // Allows dragging on both x and y axis. Use "x" or "y" for one axis.
  //   bounds: "#pages", // Specify the ID or class of the container to constrain dragging
  //   edgeResistance: 0.65, // How much resistance when dragging past the bounds (0-1)
  //   inertia: true, // Apply inertia to the dragging motion
  //   zIndexBoost: false
  // });

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
      gsap.fromTo('#links-container', {left: '-318px'}, {duration: 1, left: '0px'});
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
        gsap.fromTo('#pages-container', {left: '-318px'}, {duration: 1, left: '0px', ease:"bounce"});
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
            <LinkBox linkList={linkList} updatePages={updatePages}/>
            <PagesContainer pages={pages} focusPage={focusPage} />
        </main>
      </>
    )
    
}

export { HomePage }