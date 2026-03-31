export function cardModal(card) {
  let html = ``

  html += `
    <dialog id="${card.id}Modal" class="card-modal.hidden" popover>
      <div class="card-modal-wrapper">
        <img src="${card.image}/high.webp" loading="lazy" alt="${card.name}"/>
        <p>${card.name}</p>
      </div>
    </dialog>`

  return html
}
