// import { Component } from 'react';
import './App.css';
import Tab from './components/Tab';
import Changetable from './components/Changetable';
// import database from './firebase';

function App() {
  const data = [{ name: 'Arshad', School: 'KV', Contact: 1021 },
  { name: 'Sachin', School: 'KV', Contact: 142 },
  { name: 'Sehwag', School: 'AMU', Contact: 428 }];
  return (
    <div className="App">
      <header className="App-header">
        {/* <Tab x={data} /> */}
        <Changetable />
    
      </header>
    </div>
  );
}

export default App;
