import './App.css'
import List from './components/List';
import React , { useState } from 'react';
import data from './components/data.js'

function App() {
  const [news , setNews] = useState(data)
  return (
    <div className="App">
      <div className="bg-container">
        <div className="birthday-card">
          <h3 >{news.length} birthdays today</h3>
          <List news={news}/>
          <button onClick={() => setNews([])}>Clear All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
