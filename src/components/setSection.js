import { tcgdex } from '../api.js'
import { setCards } from './setCards.js'

export async function setSection(requiredSet) {
  const allSets = await tcgdex.fetch('sets')
  const setBrief = allSets.find((set) => set.name === requiredSet)
  const set = await tcgdex.fetch('sets', setBrief.id)

  const setSection = document.getElementById('setSection')

  // Elements for the set information
  const setInfoDiv = document.createElement('div')
  setInfoDiv.className = 'set-info-div'
  const setInfoImg = document.createElement('img')
  setInfoImg.src = `${setBrief.logo}.webp`
  setInfoImg.alt = `${setBrief.name} Logo`
  setInfoImg.width = 300
  const setInfoName = document.createElement('h1')
  setInfoName.innerText = `${setBrief.name}`
  const setInfoCardCount = document.createElement('h2')
  setInfoCardCount.innerText = `Card count: ${setBrief.cardCount.official}`
  const setInfoReleaseDate = document.createElement('h2')
  setInfoReleaseDate.innerText = `Release: ${set.releaseDate}`

  setInfoDiv.append(setInfoImg)
  setInfoDiv.append(setInfoName)
  setInfoDiv.append(setInfoCardCount)
  setInfoDiv.append(setInfoReleaseDate)

  setSection.append(setInfoDiv)

  const setCardsWrapperDiv = document.createElement('div')

  setCards(set, setCardsWrapperDiv)

  setSection.append(setCardsWrapperDiv)
}
