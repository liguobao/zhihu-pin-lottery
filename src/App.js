import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactRouletteSlot from 'react-roulette-slot';

const action = (cb) => {
  // 发出请求, 请求成功后,调cb.
  cb({ data: 1000 });
};
const data = [
  { id: 1000, img: 'http://dummyimage.com/30x30', label: 'Larry' },
  { id: 1001, img: 'http://dummyimage.com/30x30', label: 'Joseph' },
  { id: 1003, img: 'http://dummyimage.com/30x30', label: 'Paul' },
  { id: 1004, img: 'http://dummyimage.com/30x30', label: 'Ronald' },
  { id: 1005, img: 'http://dummyimage.com/30x30', label: 'Helen' },
  { id: 1006, img: 'http://dummyimage.com/30x30', label: 'Maria' },
  { id: 1007, img: 'http://dummyimage.com/30x30', label: 'Mark' },
  { id: 1008, img: 'http://dummyimage.com/30x30', label: 'Mark' },
  { id: 1009, img: 'http://dummyimage.com/30x30', label: 'Carol' },
  { id: 1010, img: 'http://dummyimage.com/30x30', label: 'Ronald' },
  { id: 1011, img: 'http://dummyimage.com/30x30', label: 'Nancy' },
  { id: 1012, img: 'http://dummyimage.com/30x30', label: 'Michelle' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
