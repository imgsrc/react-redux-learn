import { DELETE_ARTICLE, CHANGE_SELECTION } from '../constants'

const defaultFilter = {
  selected: []
}

export default (filter = defaultFilter, action) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_SELECTION:
      return { ...filter, selected: payload.selected }

    case DELETE_ARTICLE:
      return { ...filter, selected: filter.selected.filter(id => id !== payload.id) }
  }
  return filter
}