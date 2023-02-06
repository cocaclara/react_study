import React from 'react'

function Welcome (props) {
  return <h4>Hello, {props.name}</h4>
}

export default function composition() {
  return (
    <div>
      <h1>#컴포넌트 합성</h1>
      <h3>: 여러 개를 하나의 컴포넌트에 넣는 것</h3>
      <Welcome name="Sara" />
      <Welcome name="Tommy" />
      <Welcome name="Amy" />
    </div>
  )
}