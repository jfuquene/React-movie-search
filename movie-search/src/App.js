import React from "react"
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <form className="form">
          <label htmlFor="query">Search Movie:</label>
          <input type="text" name="query" placeholder="e.i Teminator" />
          <button type="submit"></button>
      </form>
      </div>
   
  );
}

export default App;
