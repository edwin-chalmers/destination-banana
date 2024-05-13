import PagesContainer from '../PagesContainer/PagesContainer';
import RunningMonkeys from '../RunningMonkeys/RunningMonkeys';
import LinkBox from '../LinkBox/LinkBox'
import Toolbar from '../Toolbar/Toolbar'
import Win from '../Win/Win'
import LoadScreen from '../LoadScreen/LoadScreen'
import { fetchPage, fetchHTML, getCategoryMembers } from '../../ApiCalls';
import { useEffect, useState, useRef } from 'react';
import parse from 'html-react-parser';
import { gsap } from 'gsap';
import { StyledHomepage } from './HomePage.styled'
import { useNavigate } from 'react-router-dom'
import BeachBackground1 from './BeachBackground1';
import { useGlobalProps } from '../..';
import NavButtonLeft from './NavButtonLeft.png'
import NavButtonRight from './NavButtonRight.png'
import { postUser } from '../../ApiCalls';


function HomePage({ }) {
  const [pages, setPages] = useState([])
  const [linkList, setLinkList] = useState([])
  const [nextId, setNextId] = useState(1)
  const [targetTitle, setTargetTitle] = useState('banana')
  const [win, setWin] = useState(false)
  const [backClicks, setBackClicks] = useState(0)
  const [position, setPosition] = useState()
  const [leftClick, setLeftClick] = useState(1)
  const [rightClick, setRightClick] = useState(1)
  const [allowedRight, setAllowedRight] = useState()
  const [allowedLeft, setAllowedLeft] = useState(0)
  const [clickAllowed, setClickAllowed] = useState(true);
  const [userProfile, setUserProfile] = useState()
  const navigate = useNavigate()
  gsap.config({ trialWarn: false })
  const pagesRef = useRef()
  const [dataReady, setDataReady] = useState(false)
  const [linkReady, setLinkReady] = useState(false)
  const [date, setDate] = useState()
  const [gameId, setgameId] = useState()
  const [width, setWidth] = useState();
  const navBar = useRef()
  const [currentPage, setCurrentPage] = useState()

  const {
    startTitle,
    setStartTitle,
    gameType,
  } = useGlobalProps();

  useEffect(() => {
//what is this next line?
    if (currentPage === 'home') {
      function handleResize() {
        setWidth(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [currentPage])

  useEffect(() => {
    setCurrentPage('home')
  }, []);

  useEffect(() => {
    if (!startTitle) {
      setCurrentPage('')
    }
  }, [startTitle])

  useEffect(() => {
    if (navBar.current) {
      const style = window.getComputedStyle(navBar.current);
      const fontSize = style.fontSize;
      navBar.current.style.fontSize = `${width / 1920 * 100}%`
    }
  }, [width])

  useEffect(() => {
    fetchWikiData()
    setWidth(window.innerWidth)
    return () => {
      const gameData = JSON.parse(localStorage.getItem('gameData'))
      postUser(gameData)
      localStorage.removeItem('gameData')
    }
  }, [])

  useEffect(() => {
    if (win) {
      const gameData = JSON.parse(localStorage.getItem('gameData'))
      postUser(gameData)
      localStorage.removeItem('gameData')
    }
  }, [win])

  useEffect(() => {
    if (startTitle) {
      const now = new Date()
      const formattedDate = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })

      setDate(formattedDate)
      const timestamp = Date.now();
      const randomInt = Math.floor(Math.random() * 1000000)

      setgameId(`${timestamp}${randomInt}`)
      const user = JSON.parse(localStorage.getItem('bananaUser'))

      if (user) {
        setUserProfile(user)
      }
    }
  }, [startTitle])

  useEffect(() => {
    if (userProfile && startTitle) {
      const gameData = {
        id: userProfile.id,
        date: date,
        gameId: gameId,
        gameType: gameType,
        topic: startTitle,
        clicks: 0,
        links: []
      }
      localStorage.setItem('gameData', JSON.stringify(gameData))
    }
  }, [userProfile])

  useEffect(() => {
    setAllowedRight(pages.length - 3)
  }, [pages.length])

  const fetchWikiData = async () => {
    if (!startTitle) {
      fetch('https://en.wikipedia.org/api/rest_v1/page/random/title').then(rando => {
      // fetch('https://en.wikipedia.org/api/rest_v1/page/title/Musa_(genus)').then(rando => {
        return rando.json()
      }).then(data => {
        const title = data.items[0].title.replaceAll('_', ' ').toString()
        updatePages(title)
        setStartTitle(title)
      }).catch(error => handleError(error))
    } else {
      const formatTitle = startTitle.replaceAll('_', ' ').toString()
      updatePages(formatTitle)
    }
  }



  function handleError(error) {
    navigate('/error')
  }

  function handleBrokenLink() {
    let tl = gsap.timeline()
    const monkeyContainer = document.createElement('div')
    const monkeyBro = document.createElement('img')
    const badLink = document.createElement('div')
    const linkMsg = document.createElement('h3')

    monkeyContainer.id = 'monkey-container'
    linkMsg.innerHTML = `Whoops! It looks like that banana won\'t banana <br/> Pick a new link`
    badLink.id = 'bad-link'
    monkeyBro.src = '/assets/confused_monkey.svg'
    monkeyBro.id = "confused-monkey"

    const homePage = document.querySelector('.background-container')
    homePage.appendChild(monkeyContainer)
    monkeyContainer.appendChild(monkeyBro)
    monkeyContainer.appendChild(badLink)
    badLink.appendChild(linkMsg)

    tl.to(monkeyContainer, {
      transform: 'translate(-1460px, 80px)',
      duration: 0.5,
      ease: 'bounce',
    })

    tl.to(monkeyContainer, {
      transform: 'translate(1000px, -500px)',
      duration: 0.5,
      ease: 'bounce',
      onComplete: () => {
        homePage.removeChild(monkeyContainer)

      }
    }, '+=4')
  }

  function updatePages(endpointText, isNew) {
    if (endpointText === 'Banana') {
      setNextId(prev => prev += 1)
      setPages((prev) => {
        const updatedPages = prev.map((page) => {
          page.isCurrent = false

          return page
        })
        const newPage = {
          id: nextId,
          stringForDOM: '',
          isCurrent: true,
          isDisplayed: true,
          title: endpointText
        }

        return [...updatedPages, newPage]
      })

      createLinkList(endpointText)
    } else {
      let htmlFilter
      const parser = new DOMParser()

      fetchHTML(endpointText).then(html => {
        if (!html) {
          handleBrokenLink()
          focusPage(0)
          return
        }
        const regex = /<a\b[^>]*>(.*?)<\/a>/gi;
        html = html.replace(regex, '<p class="replaced-link">$1</p>');

        console.log(html)

        htmlFilter = parser.parseFromString(html, 'text/html').querySelector('body > section').outerHTML
        const parsedHTML = parse(htmlFilter)
        let newPage
        if(isNew){
          newPage = {
            id: isNew,
            stringForDOM: parsedHTML,
            isCurrent: true,
            isDisplayed: true,
            title: endpointText
          }
        } else {
          newPage = {
            id: nextId,
            stringForDOM: parsedHTML,
            isCurrent: true,
            isDisplayed: true,
            title: endpointText
          }
        }

        setNextId(prev => prev += 1)
        setPages((prev) => {
          const updatedPages = prev.map((page) => {
            page.isCurrent = false

            return page
          })

          return [...updatedPages, newPage]
        })

        createLinkList(endpointText)
      }).catch(error => handleError(error))
    }
  }

  function cleanupHTML() {
    document.querySelectorAll('img').forEach((img) => {
      if (img.src.includes('Red_pog')) {
        img.remove()
      }
    })
  }

  function createLinkList(endpointText) {
    if (endpointText === 'Banana') {
      setLinkList('Banana')
    } else {
      let charactersToRemove = ['_', '-', '%', ":", 'Help', 'Template', 'Portal']
      let filteredWikiLinks
      fetchPage(endpointText).then(linksArray => {
        filteredWikiLinks = linksArray.filter(link => {
          return !charactersToRemove.some(character => link.title.includes(character));
        })

        const randomizedList = filteredWikiLinks.sort(() => Math.random() - 0.5);
        const bananaIndex = randomizedList.forEach((link, i) => {
          i++
          if (link.title.toLowerCase() === 'banana') {
            const bananaLink = randomizedList.splice(i - 1, 1)
            randomizedList.unshift(bananaLink[0])
          }
        })
        setLinkList(randomizedList)
        setTimeout(() => { setDataReady(true) }, 1000)
      })
    }
  }

  function checkForWin(text) {
    return (text.toLowerCase() === targetTitle.toLowerCase())
  }

  function handleWin() {
    setWin(true)
  }

  function resetGame() {
    const isNew = 1
    setPages([])
    setNextId(1)
    fetch('https://en.wikipedia.org/api/rest_v1/page/random/title').then(rando => {
      // fetch('https://en.wikipedia.org/api/rest_v1/page/title/Musa_(genus)').then(rando => {
        return rando.json()
      }).then(data => {
        const title = data.items[0].title.replaceAll('_', ' ').toString()  
        setWin(false)
        updatePages(title, isNew)
        setStartTitle(title)
      })
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
      dots.push(dot)
    }
    gsap.set(dots, {
      scale: "random(2, 10)",
      x: -2500,
      y: 800,
      rotate: "random(0,180)",
      transform: 'translate(50%, 50%)'
    })

    let tl = gsap.timeline({ repeat: 100 })
    tl.to(ref.current, 0.1, { alpha: 1, filter: 'invert(1)', delay: 1 }, 0).to(ref.current, 0.1, { alpha: 1, filter: 'invert(0)', delay: 0 })

    let tl2 = gsap.timeline({ onComplete: removeDots })
    tl2.to(dots, {
      duration: 5,
      y: '+=5000',
      ease: 'easeInOutQuad',
      delay: "0.5",
      zIndex: '100',
    })

    function removeDots() {
      document.querySelectorAll('.dot').forEach((dot) => dot.remove())
    }
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

  const handleScroll = (direction) => {
    if (clickAllowed) {
      let left = leftClick
      let right = rightClick
      let allowedLeftClicks = allowedLeft

      switch (direction) {
        case 'left':

          if (allowedLeft > 0) {
            setLeftClick(left + 1)
            setRightClick(right - 1)
            pagesRef.current.childFunction('left')
          }
          break

        case 'right':
          if (rightClick < allowedRight) {
            setRightClick(right + 1)
            setAllowedLeft(allowedLeftClicks + 1)
            pagesRef.current.childFunction('right')
          }
          break
      }
    }
  }

  const handleClickAllowed = (newValue) => {
    setClickAllowed(newValue);
  };

  useEffect(() => {
    if (dataReady) {
      setTimeout(() => { setLinkReady(true) }, 1000)
    }
  }, [dataReady])

  const transitionValues = {
    duration: 5,
    yoyo: Infinity,
    ease: "easeOut"
  };

  return (
    <StyledHomepage id='homepage'>
      <BeachBackground1 currentPage={currentPage} />
      {win && <Win pages={pages} resetGame={resetGame} />}
      {dataReady ?
        <>
          <Toolbar ref={navBar} setStartTitle={setStartTitle} startTitle={startTitle} pages={pages} focusPage={focusPage} backClicks={backClicks} />
          <div id='pageSelection'>
            <div id='leftButton'>{pages.length > 4 && rightClick > 1 && <div id='arrowContainer'><div id='leftNav' src={NavButtonLeft} onClick={() => handleScroll("left")}></div></div>}</div>
            <div id='rightButton'>{pages.length > 4 && rightClick < allowedRight && <div id='arrowContainer'><div id='rightNav' src={NavButtonRight} onClick={() => handleScroll("right")}></div></div>}</div>
          </div>
          <div className="background-container">
            {linkReady &&
              <>
                {
                  width > 720 &&
                    <>
                      <RunningMonkeys />
                    </>
                }
                <LinkBox id="links-container" linkList={linkList} checkForWin={checkForWin} updatePages={updatePages} pages={pages} />
                <div className='outer-container'>
                  <main id='main-content'>
                    <PagesContainer id="page-container" clickAllowed={clickAllowed} setClickAllowed={handleClickAllowed} ref={pagesRef} resetGame={resetGame} pages={pages} focusPage={focusPage} />
                  </main>
                </div>
              </>
            }
          </div>
        </>
        :
        <LoadScreen />}
    </StyledHomepage>
  )
}

export { HomePage }