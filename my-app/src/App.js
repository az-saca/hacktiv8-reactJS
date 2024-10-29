import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterFunc from './components/CounterFunc';
import CounterClass from './components/CounterClass';

function App() {
  return (
    <div className="container">
      <div className="text-center my-3">
        <h1>Belajar React</h1>
      </div>
      <hr />
      <div className="row text-center">
        <CounterFunc />
        <CounterClass />
      </div>
    </div>
  );
}

export default App;
