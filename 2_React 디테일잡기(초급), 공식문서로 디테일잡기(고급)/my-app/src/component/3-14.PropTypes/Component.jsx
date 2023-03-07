import React from 'react'
import PropTypes from 'prop-types'

function PropComponent(props) {
  return <div>{props.name}</div>
}

PropComponent.defaultProps = {
  name: "Jimmy",
  age: 8,
}

// 개발할 때 확인용으로 사용
PropComponent.propTypes = {
  name: PropTypes.string,
  // age: PropTypes.number.isRequired,
  age: function(props, propName, componentName) {
    if (!/(7|8)/.test(props[propName])) {    // age가 7이거나 8이 아니면 에러띄우기
      return new Error(
        'Invalid prop `' + 
        propName +
        '가 {' +
        props[propName] +
        '} 여서' +
        ' `' + 
        componentName + 
        '`. 매치가 안됨. 7 또는 8 이어야 함'
      );
    }
  },
}


export default function Component() {
  return (
    <div><PropComponent /></div>
  )
}
