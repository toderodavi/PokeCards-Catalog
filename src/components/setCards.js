import { cardModal } from './cardModal'

export function setCards(set, wrapper) {
  set.cards.forEach((card) => {
    let cardImage = document.createElement('img')
    cardImage.src = `${card.image}/low.webp`
    cardImage.alt = `${card.name}`
    cardImage.width = 245
    cardImage.className = 'card-image'

    cardImage.addEventListener('click', () => {
      const modal = cardModal(card)
      document.body.append(modal)
    })
    wrapper.append(cardImage)
  })
}

// The current solution is a cheap trick regarding how dialogs work.
// A dialog will always open if something inside them is fetching a information.
// In this case, they ARE fetching the cards image - thus, always openning.
// All at the same time.
// Here, by setting loading as lazy and making the dialogs hidden at first,
// It will take the first click in the button to make the fetch happen
// (as the button is refering to it's respective dialog)
// The problem with this method is that all the dialogs will be in the DOM.
// I'm not sure if there is a better way to solve this

// 04/01
// Maybe it has to do with display: flex?
