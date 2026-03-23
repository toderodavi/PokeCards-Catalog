import { tcgdex } from '../api'
import { showSetCards } from './showSetCards'

export async function setSection(requiredSet) {
  const allSets = await tcgdex.fetch('sets')
  const setBrief = allSets.find((set) => set.name === requiredSet)
  const set = await tcgdex.fetch('sets', setBrief.id)

  return `
  <section>
    <div>
      <img src="${setBrief.logo}.webp" width="400px"  alt="${setBrief.name} Logo"/>
      <p>${setBrief.name}</p>
      <p>Card count: ${setBrief.cardCount.official}</p>
      <p>Release: ${set.releaseDate}</p>
    </div>
    <div>
      ${await showSetCards(set)}
    </div>
  </section>
  `
}
