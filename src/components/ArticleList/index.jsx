import React from 'react'
import { connect } from 'react-redux'
import Article from '../Article'
import accordion from '../../decorators/accordion'
import { filtratedArticlesSelector } from '../../selectors'

const ArticleList = props => {

  const { articles, openItemId, toggleOpenItem } = props

  const articleElements = articles.map(article =>
    <li key={ article.id }>
      <Article
        article={ article }
        isOpen={ article.id === openItemId }
        toggleOpen={ toggleOpenItem(article.id) }
      />
    </li>)

  return (
    <ul>
      { articleElements }
    </ul>
  )
}

export default connect(state => ({ articles: filtratedArticlesSelector(state) }))(accordion(ArticleList))