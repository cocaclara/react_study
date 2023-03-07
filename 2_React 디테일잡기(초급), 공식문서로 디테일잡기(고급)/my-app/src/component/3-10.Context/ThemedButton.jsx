// import React, { Component } from 'react'
// import { ThemeContext } from './ThemeContext';

// class ThemedButton extends Component {
//   render() {
//     let props = this.props;
//     let theme = this.context;

//     return (
//       <button
//         {...props}
//         onClick={props.changeTheme}
//         style={{backgroundColor: theme.background, color: theme.foreground}}
//       >
//         Button
//       </button>
//     )
//   }
// }

// ThemedButton.contextType = ThemeContext;

// export default ThemedButton;

// Props drilling의 한계 해소를 위해 Context 사용
import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

export default function ThemedButton(props) {
  const theme = useContext(ThemeContext);
  return (
    <button
      {...props}
      onClick={props.changeTheme}
      style={{backgroundColor: theme.background, color: theme.foreground}}
    >
      Button
    </button>
  )
}
