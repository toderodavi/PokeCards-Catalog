export async function showSetCards(set) {
  let html = ``

  set.cards.forEach((card) => {
    html += `<img src="${card.image}/low.webp" alt="${card.name}" />`
  })

  return html
}
