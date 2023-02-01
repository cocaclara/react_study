import React from 'react'

export default function Event() {
  const handleButtonClick = (e) => {
    // console.dir(e);
    console.log('handleButtonClick');
  }
  const handleMouseLeave = (e) => {
    console.dir(e);
  }
  const handleClickCapture = () => {
    console.log('handleClickCapture');
  }
  const handleClickCapture2 = () => {
    console.log('handleClickCapture2');
  }
  const handleClickCapture3 = () => {
    console.log('handleClickCapture3');
  }
  const handleClickBubble = () => {
    console.log('handleClickBubble');
  }

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClickCapture={handleClickCapture3} onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>Button</button>
      </div>
    </div>
  )
}
