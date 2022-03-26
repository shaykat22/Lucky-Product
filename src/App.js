import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Answer from './components/Answer/Answer';


function App() {
  return (
    <div className='m-5'>
      <Header></Header>
      <Shop></Shop>
      <Answer></Answer>
    </div>
  );
}

export default App;
