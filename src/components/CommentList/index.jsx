import React from 'react'
import toggleOpen from '../../decorators/toggleOpen'
import Comment from '../Comment'
import CommentsForm from '../CommentsForm'

const CommentList = ({ comments = [], isOpen, toggleOpen }) => {

  const getBody = () => {
    if (!isOpen) return null
    if (!comments.length) {
      return (
        <div>
          <p>No comments yet</p>
          <CommentsForm/>
        </div>
      )
    }

    return (
      <div>
        <ul>
          { comments.map(comment => <li key={ comment.id }><Comment comment={ comment }/></li>) }
        </ul>
        <CommentsForm/>
      </div>
    )
  }

  const btnText = isOpen ? 'hide comments' : 'show comments'

  return (
    <div>
      <button onClick={ toggleOpen }>{ btnText }</button>
      { getBody() }
    </div>
  );
}

export default toggleOpen(CommentList)