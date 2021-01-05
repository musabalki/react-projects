import { useState } from 'react';
import './App.css';
import Count from './companies/Count';
import Hr from "./companies/Hr";
import Text from "./companies/Text";

function App() {
  // useState, Props, Functional Component, Events Kullanıldı
  const [count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }

  return (
    <div className="App">
      <Count title="Sayaç Uygulaması" count={count} increment={increment} decrement={decrement} ></Count>
      <Hr/>
      <Text></Text><Text></Text>
    </div>
  );
}

export default App;
