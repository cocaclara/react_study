import React, { Profiler, memo, useState, useMemo } from 'react'
import './CommentItem.css'

function CommentItem({title, content, likes, onClick}) {
  const [clickCount, setClickCount] = useState(0);
  
  function onRenderCallback(
    id, // 방금 커밋된 Profiler 트리의 "id"
    phase, // "mount" (트리가 방금 마운트가 된 경우) 혹은 "update"(트리가 리렌더링된 경우)
    actualDuration, // 커밋된 업데이트를 렌더링하는데 걸린 시간
    baseDuration, // 메모이제이션 없이 하위 트리 전체를 렌더링하는데 걸리는 예상시간 
    startTime, // React가 언제 해당 업데이트를 렌더링하기 시작했는지
    commitTime, // React가 해당 업데이트를 언제 커밋했는지
    interactions // 이 업데이트에 해당하는 상호작용들의 집합
  ) {
    // 렌더링 타이밍을 집합하거나 로그...
    console.log(`actualDuration(${title} 렌더링 타이밍: ${actualDuration})`)
  };

  const handleClick = () => {
    onClick();
    setClickCount(prev => prev + 1);
    alert(`${title} 눌림`);
  };

  // 특정 값을 재사용하고 싶을 때 -> useMemo
  // 특정 함수를 재사용하고 싶을 때 -> useCallback
  // useCallback(fn, [deps])은 useMemo(() => fn, [deps])와 같다.

  // clickCount 가 10보다 크면 {rate}에 'Good' 표시
  const rate = useMemo(() => {    // useMemo를 사용하지 않으면, 나의 상태(눌렀을 떄)도 변경되서 리랜더링 됨.
    console.log('rate check');
    return clickCount > 10 ? 'Good' : 'Bad';
  }, [clickCount]);

  return (
    <Profiler id='CommentItem' onRender={onRenderCallback}>
      <div className='CommentItem' onClick={handleClick}>
        <span>{title}</span>
          <br />
          <span>{content}</span>
          <br />
        <span>{likes}</span>
          <br />
        <span>{rate}</span>
          <br />
        <span>{clickCount}</span>
      </div>
    </Profiler>
  )
}
export default memo(CommentItem);
// export default CommentItem;