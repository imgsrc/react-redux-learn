import React, { PureComponent } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { deleteArticle } from '../../AC'
import CommentList from '../CommentList'

class Article extends PureComponent {

  /* PureComponent делает вот это:
     shouldComponentUpdate(nextProps, nextState) {
     return nextProps.isOpen !== this.props.isOpen
   }*/

  setCommentsRef = ref => {
    // console.log('ref: ', findDOMNode(ref))
  }

  getBody = () => {
    const { article, isOpen } = this.props
    if (!isOpen) return null
    return (
      <section>
        { article.text }
        <CommentList comments={ article.comments } ref={ this.setCommentsRef }/>
      </section>)
  }

  handleDelete = () => {
    const { deleteArticle, article } = this.props
    deleteArticle(article.id)
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props

    return (
      <div>
        <h3>{ article.title }</h3>
        <button onClick={ toggleOpen }>
          { isOpen ? 'close' : 'open' }
        </button>
        <button onClick={ this.handleDelete }>delete me</button>
        { this.getBody() }
      </div>
    )
  }
}

export default connect(null, { deleteArticle })(Article)