import { tcgdex } from '../api.js'
import { setCards } from './setCards.js'

export async function setSection(requiredSet) {
  const allSets = await tcgdex.fetch('sets')
  const setBrief = allSets.find((set) => set.name === requiredSet)
  const set = await tcgdex.fetch('sets', setBrief.id)

  return `
  <section>
    <div class="set-info-div">
      <img src="${setBrief.logo}.webp" width="300px"  alt="${setBrief.name} Logo"/>
      <h1>${setBrief.name}</h1>
      <h2>Card count: <span>${setBrief.cardCount.official}</span></h2>
      <h2>Release: <span>${set.releaseDate}<span/></h2>
    </div>
    <div class="cards-wrapper-div">
      ${await setCards(set)}
    </div>
  </section>
  `
}
