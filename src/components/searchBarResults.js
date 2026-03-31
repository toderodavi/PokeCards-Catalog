import { cardModal } from './cardModal'

export function searchBarResults(cardsBrief, setsBrief) {
  let html = ``
  const sbWrapper = document.getElementById('searchBarResults')

  if (!cardsBrief && !setsBrief) {
    return html
  }

  cardsBrief.forEach((cardBrief) => {
    // A card brief object contains the card id,
    // together with the set. To get the set id, you need to split
    // the string to get the substring before the '-'
    const cardSetId = cardBrief.id.split('-')[0]
    html += `
      <button id="${cardBrief.id}Btn" commandFor="${cardBrief.id}Modal" command="show-modal">
        <div class="search-result-div">
            <img src="${cardBrief.image}/low.webp" alt="${cardBrief.name}" width="100px" />
            <p>${cardBrief.name}</p>
            <p>${setsBrief.find((setBrief) => setBrief.id === cardSetId)?.name ?? 'Not find / Not part of a set'}</p>
        </div>
        ${cardModal(cardBrief)}
      </button>`
  })
  sbWrapper.innerHTML = html
}
