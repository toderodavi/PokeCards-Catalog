import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { showCards } from './showCards.js'

document.querySelector('#app').innerHTML = `
<main>
  <h1>Hi</h1>
  ${await showCards()}
</main>
`
