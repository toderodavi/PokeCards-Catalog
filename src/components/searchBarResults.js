import { cardModal } from './cardModal'

export function searchBarResults(cardsBrief, setsBrief) {
  const sbWrapper = document.getElementById('searchBarResults')

  // Every time there is a result, the wrapper wil be emptied
  sbWrapper.innerHTML = ''

  cardsBrief.forEach((cardBrief) => {
    // A card brief object contains the card id,
    // together with the set. To get the set id, you need to split
    // the string to get the substring before the '-'
    const cardSetId = cardBrief.id.split('-')[0]

    const cardResultDiv = document.createElement('div')
    cardResultDiv.className = 'search-result-div'

    const cardImage = document.createElement('img')
    cardImage.src = `${cardBrief.image}/low.webp`
    cardImage.alt = `${cardBrief.name}`
    cardImage.width = 100

    const cardNameP = document.createElement('p')
    cardNameP.innerText = cardBrief.name

    const cardSetP = document.createElement('p')
    cardSetP.innerText = setsBrief.find((setBrief) => setBrief.id === cardSetId)?.name ?? 'Not find / Not part of a set'

    cardResultDiv.append(cardImage)
    cardResultDiv.append(cardNameP)
    cardResultDiv.append(cardSetP)

    cardResultDiv.addEventListener('click', () => {
      const modal = cardModal(cardBrief)
      document.body.append(modal)
    })

    sbWrapper.append(cardResultDiv)
  })
}
