import { INCREMENT, DELETE_ARTICLE, CHANGE_SELECTION } from '../constants'

export const increment = () => ({
  type: INCREMENT
})

export const deleteArticle = id => ({
  type: DELETE_ARTICLE,
  payload: { id }
})

export const changeSelection = selected => ({
  type: CHANGE_SELECTION,
  payload: { selected }
})