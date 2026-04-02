import { Query } from '@tcgdex/sdk'
import { tcgdex } from '../api'
import { searchBarResults } from './searchBarResults'

export function searchBar() {
  const searchBarInput = document.getElementById('searchBar')

  searchBarInput.addEventListener('input', (e) => {
    setTimeout(async () => {
      if (e.target.value) {
        const cardsBrief = await tcgdex.card.list(new Query().like('name', e.target.value).sort('order', 'ASC'))
        const setsBrief = await tcgdex.fetch('sets')

        searchBarResults(cardsBrief, setsBrief)
      } else {
        searchBarResults([], [])
      }
    }, 250)
  })
}
