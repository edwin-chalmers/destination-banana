import styled from 'styled-components'
import PagesContainer from '../PagesContainer/PagesContainer';
import LinkBox from '../LinkBox/LinkBox'
import Toolbar from '../Toolbar/Toolbar'
import Win from '../Win/Win'
import { fetchPage, fetchHTML } from '../../ApiCalls';
import { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';
import InertiaPlugin from 'gsap-trial/InertiaPlugin'
import { Physics2DPlugin } from "gsap-trial/Physics2DPlugin";
import { StyledHomepage } from './HomePage.styled'
import { Route, Routes, useNavigate } from 'react-router-dom'
// import { useGSAP } from 'gsap'



gsap.registerPlugin(Draggable, InertiaPlugin, Physics2DPlugin);

function HomePage({setError}) {

  const [pages, setPages] = useState([])
  const [linkList, setLinkList] = useState([])
  const [nextId, setNextId] = useState(1)
  const [targetTitle, setTargetTitle] = useState('banana')
  const [win, setWin] = useState(false)
  const [backClicks, setBackClicks] = useState(0)
  const navigate = useNavigate()


  useEffect(() => {
    let endpointAPI

    // ** RANDOM START TOPIC **//
    if(!endpointAPI){
      fetch('https://en.wikipedia.org/api/rest_v1/page/random/title').then(rando => {
        return rando.json()
      }).then(data => {
        endpointAPI = data.items[0].title.replaceAll('_', ' ').toString()
        updatePages(endpointAPI)

    // if (!endpointAPI) {
    //   fetch('https://en.wikipedia.org/api/rest_v1/page/title/Musa_(genus)').then(rando => {
    //     return rando.json()
    //   }).then(data => {
    //     endpointAPI = data.items[0].title.replaceAll('_', ' ').toString()
    //     updatePages(endpointAPI)


        gsap.config({ trialWarn: false })
        let tl = gsap.timeline()
        tl.fromTo('#links-container', { left: '-300' }, { duration: 1, ease: 'bounce', left: '0' });
        

        // gsap.fromTo('#links-container', {left: '-300'}, {duration: .75, ease: 'bounce', left: '0'});
      }).catch(error => handleError(error))
    } else {
      updatePages(endpointAPI)
    }

  }, [])
  
  function handleError(error) {
    console.log(error)
    navigate('/error')
  }

  function updatePages(endpointText) {
    createLinkList(endpointText)

    let htmlFilter

    const parser = new DOMParser()
    fetchHTML(endpointText).then(html => {
      // html =''
      if(!html){
        throw new Error('Error fetching HTML')
      }

      htmlFilter = parser.parseFromString(html, 'text/html').querySelector('body > section').outerHTML

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
    }).catch(error => handleError(error))
  }


  function cleanupHTML() {
    document.querySelectorAll('img').forEach((img) => {
      if (img.src.includes('Red_pog')) {
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

  function checkForWin(text) {
    if (text.toLowerCase() === targetTitle.toLowerCase()) {
      handleWin()
    }
  }

  function handleWin() {
    setWin(true)
  }

  function animateWin(ref) {
    let dots = [],
      bg = document.getElementById('main-content'),
      i, dot;
    for (i = 0; i < 200; i++) {
      dot = document.createElement("div");
      dot.setAttribute("class", "dot");
      bg.appendChild(dot);
      dot.textContent = "🍌"
      dots.push(dot);
    }
    gsap.set(dots, {
      scale: "random(2, 10)",
      x: -2500,
      y: 800,
      rotate: "random(0,180)",
      transform: 'translate(50%, 50%)'
    });

    let tl = gsap.timeline({ repeat: 100 })
    tl.to(ref.current, 0.1, { alpha: 1, filter: 'invert(1)', delay: 1 }, 0).to(ref.current, 0.1, { alpha: 1, filter: 'invert(0)', delay: 0 })

    gsap.to(dots, {
      duration: 8,
      physics2D: {
        velocity: "random(200, 1000)",
        angle: "random(250, 290)",
        gravity: 500
      },
      delay: "0"
    });
  }

  function focusPage(id) {
    setBackClicks((prev) => {
      const newBacks = prev + 1

      return newBacks
    })

    let selectedPage;

    if (!id) {
      const currentPage = pages.find(page => page.isCurrent)
      const previousPage = pages.reduce((prevPage, page) => {
        if (page.id < currentPage.id && page.isDisplayed) {
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
      if (page.id > selectedPage.id) {
        page.isDisplayed = false
      }
      page.isCurrent = false
      if (page.id === selectedPage.id) {
        page.isCurrent = true
      }

      return page;
    })
    cleanupHTML()
    createLinkList(selectedPage.title)
    setPages(updatedPages)
  }

  console.log('pages', pages)

  return (
    <StyledHomepage>
      {win && <Win pages={pages} animateWin={animateWin} />}
      <Toolbar pages={pages} focusPage={focusPage} backClicks={backClicks} />
      <main id='main-content'>
        <LinkBox id="links-container" linkList={linkList} checkForWin={checkForWin} updatePages={updatePages} />
        <PagesContainer id="page-container" pages={pages} focusPage={focusPage} />
      </main>
    </StyledHomepage>
  )

}

export { HomePage }