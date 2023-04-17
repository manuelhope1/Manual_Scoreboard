import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Title from './components/Title';

function App() {
  return (
    <div className="body">
      <Title/>
      <Board/>
    </div>
  );
}

export default App;
