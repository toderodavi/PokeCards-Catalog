export async function setCards(set) {
  let html = ``

  set.cards.forEach((card) => {
    html += `<img src="${card.image}/low.webp" alt="${card.name}" width="245"/>`
  })

  return html
}
