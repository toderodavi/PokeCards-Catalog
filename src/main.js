// import './style.css'
import './components/setCards.css'
import './components/cardModal.css'
import './components/setSection.css'
import './components/searchBarResults.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setSection } from './components/setSection.js'
import { searchBar } from './components/searchBar.js'

document.querySelector('#app').innerHTML = `
<main>
  <div id="searchBarWrapper">
      <input type="text" name="searchBar" id="searchBar"/>
      <div id="searchBarResults" />
  </div>
  <section id="setSection">
  </section>
</main>
`
searchBar()
setSection('Perfect Order')
