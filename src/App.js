import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Title from './components/Title';
import Nav from './components/Nav';

function App() {
  return (

    <div className='body'>
      <Nav/>
      <div className="holder">
        <Title/>
        <Board/>
      </div>
    </div>
  );
}

export default App;
