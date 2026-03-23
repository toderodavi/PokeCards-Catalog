import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setSection } from './components/SetSection'

document.querySelector('#app').innerHTML = `
<main>
  ${await setSection('Ascended Heroes')}
</main>
`
