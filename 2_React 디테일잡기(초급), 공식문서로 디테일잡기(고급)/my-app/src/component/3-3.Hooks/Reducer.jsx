import React, { useReducer } from 'react'

export default function Reducer() {
  const initialState = {count: 0, name: 'Jimmy'};
  
  function reducer(state, action) {
    switch(action.type){
      case 'reset':
          return initialState;
      case 'decrement':
          return {count: state.count - 1, name: 'Timmy'};
      case 'increment':
          return {count: state.count + 1, name: 'Amy'};
      default:
          throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count(Reducer): {state.count}
      Name: {state.name}
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  )
}
