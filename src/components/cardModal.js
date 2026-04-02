export function cardModal(card) {
  const modalDiv = document.createElement('div')
  modalDiv.className = 'card-modal'

  const cardImage = document.createElement('img')
  cardImage.src = `${card.image}/high.webp`
  cardImage.alt = `${card.name}`
  cardImage.loading = 'lazy'

  const cardNameP = document.createElement('p')
  cardNameP.innerText = card.name

  const closeButton = document.createElement('button')
  closeButton.addEventListener('click', () => {
    modalDiv.remove()
  })

  modalDiv.append(cardImage)
  modalDiv.append(cardNameP)
  modalDiv.append(closeButton)

  return modalDiv
}
