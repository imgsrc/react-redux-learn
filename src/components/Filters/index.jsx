import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../AC'

const SelectFilter = props => {

  const handleChange = selected => props.changeSelection(selected.map(option => option.value))

  const { articles, selected } = props
  const options = articles.map(article => ({
    label: article.title,
    value: article.id
  }))

  return (
    <Select
      options={ options }
      value={ selected }
      multi
      onChange={ handleChange }
    />
  )
}

export default connect(state => ({
  selected: state.filter.selected,
  articles: state.articles
}), { changeSelection })(SelectFilter)