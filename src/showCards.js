import { tcgdex } from './api'

export async function showCards() {
  let html = ``
  const sets = await tcgdex.fetch('sets')
  console.log(sets)
  const prismaticEvolutionBrief = sets.find((set) => set.name === 'Mega Evolution')
  const prismaticEvolutionSet = await tcgdex.fetch('sets', prismaticEvolutionBrief.id)

  prismaticEvolutionSet.cards.forEach((card) => {
    html += `<img src="${card.image}/low.webp" />`
  })

  return html
}
