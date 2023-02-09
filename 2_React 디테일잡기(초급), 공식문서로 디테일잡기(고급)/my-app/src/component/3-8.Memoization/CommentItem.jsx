import React, { memo } from 'react'
import './CommentItem.css'

function CommentItem({title, content, likes}) {
  return (
    <div className='CommentItem'>
    <span>{title}</span>
      <br />
      <span>{content}</span>
      <br />
      <span>{likes}</span>
    </div>
  )
}
export default memo(CommentItem);