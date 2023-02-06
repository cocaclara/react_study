import React from 'react'

function formatDate(date) {
  return date.toLocaleDateString();
}
function Avatar (props) {
  return (
      <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function Userinfo (props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <h1>#컴포넌트 추출</h1>
      <h3>: 유의미한 값들로 추출해서 새로운 컴포넌트를 만드는 것<br />(재사용성을 높이기 위한 방법 중 하나)</h3>

      <Userinfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>

      <Userinfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};


export default function Extraction() {
  return (
    <Comment date={comment.date} text={comment.text} author={comment.author} />
  )
}
