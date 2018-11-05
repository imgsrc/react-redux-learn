import { createSelector } from 'reselect'

const filtersGetter = state => state.filter
const articlesGetter = state => state.articles

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filter) => {
  const { selected } = filter
  return articles.filter(article => {
    return (!selected.length || selected.includes(article.id))
  })
})