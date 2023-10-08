import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Catogiries from './catogiries';
import Card from './card';

function App() {
  return (
    <>
      <Header />
      <div className='body'>
        <Catogiries />
        <div className="main-body">
          <Card />
        </div>
      </div>
      <footer>
        </footer>
    </>
  );
}

export default App;
