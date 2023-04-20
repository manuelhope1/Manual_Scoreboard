
import './App.css';
import Board from './components/Board';
import Title from './components/Title';
import Nav from './components/Nav';
import React, { useState } from 'react';

function App() {
  const [hgoal, hScore] = useState(0);
  const [agoal, aScore] = useState(0);

    
  return (

    <div className='body'>
      <Nav hgoal={hgoal} hScore={hScore} agoal={agoal} aScore={aScore}/>
      <div className="holder">
        <Title/>
        <Board hgoal={hgoal}  agoal={agoal}/>
      </div>
    </div>
  );
}

export default App;
