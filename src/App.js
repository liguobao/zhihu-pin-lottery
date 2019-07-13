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
    <div className="">
      <header className="">
        <ReactRouletteSlot className="Border-bewxBG cAkOwn"
        data={data}
        action={action}
        size={1000}/>
      </header>
    </div>
    
  );
}

export default App;
