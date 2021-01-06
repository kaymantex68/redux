import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

function App(props) {

  const [inputText, setInputText] = React.useState(null)
  const textInput = React.useRef(null);


  console.info('PROPS: ', props)
  console.info('STATE: ', props.state.reduser1.items)
  

  const newItem =()=>{
    addItem(textInput.current.value);

  }
  const addItem=props.addItem; 
  

  return (
    <>
      <input type="text"  ref={textInput}></input>
      <button onClick={newItem}>добавить</button>
    </>
  );
}

const state = (props)  => ({
    state: props,
})

const action = dispatch => ({
  addItem: (data) => dispatch({
    type: 'ADD_ITEM',
    payload: data,
  })
})

export default connect(state, action)(App);
