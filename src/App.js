
import './App.css';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Box from "./component/Box";
function App() {
  const count=useSelector(state=>state.count);
  let id=useSelector(state=>state.id);
  let password=useSelector(state=>state.password);
  const dispatch=useDispatch();

  const increase=()=>{
    dispatch({type:"INCREMENT",payload:{num:5}});
    
  };
  const login=()=>{
    dispatch({type:"LOGIN",payload:{id:"na",password:"123"}})
  };
  return (
    <div>
      <h1>{id},{password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={login}>Login</button>
      <button>감소</button>
      <Box />
    </div>
  );
}

export default App;
