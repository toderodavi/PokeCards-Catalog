export function setCards(set) {
  let html = ``

  set.cards.forEach((card) => {
    html += `
    <button id="${card.id}Btn" commandFor="${card.id}Modal" command="show-modal">
      <img src="${card.image}/low.webp" alt="${card.name}" width="245px" class="card-image"/>
    </button>
    <dialog id="${card.id}Modal" class="card-modal.hidden" popover>
      <div class="card-modal-wrapper">
        <img src="${card.image}/high.webp" loading="lazy" alt="${card.name}"/>
        <p>${card.name}</p>
      </div>
    </dialog>
    `
  })
  return html

  // The current solution is a cheap trick regarding how dialogs work.
  // A dialog will always open if something inside them is fetching a information.
  // In this case, they ARE fetching the cards image - thus, always openning.
  // All at the same time.
  // Here, by setting loading as lazy and making the dialogs hidden at first,
  // It will take the first click in the button to make the fetch happen
  // (as the button is refering to it's respective dialog)
  // The problem with this method is that all the dialogs will be in the DOM.
  // I'm not sure if there is a better way to solve this
}
