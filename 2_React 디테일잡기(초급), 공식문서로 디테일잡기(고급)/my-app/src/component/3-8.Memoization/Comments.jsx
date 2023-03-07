import React, { useCallback } from 'react'
import CommentItem from './CommentItem'

export default function Comments({commentList}) {
  // 인라인 콜백은 랜더될 때마다 새로운 변수/함수가 재생성되므로, useCallback으로 한번 감싸서 준다.
  // const memoizedCallback = useCallback(() => {doSomething(a, b);}, [a, b]);  // defendency array에 들어있는 값(a , b)들이 바뀌었을 때, 재생성한다.

  const handleClick = useCallback(() => console.log('눌림'), []);   // 특정 함수를 재사용하고 싶을 때

  return (
    <div>
      {commentList.map((comment) => (
        <CommentItem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClick={handleClick}
        />
      ))}
    </div>
  )
}
