import './App.css';
import React, { useState } from 'react';


function App() {
  return (
    <div >
      <input type="file" name="file" onChange={changeHandler} />
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
      
    </div>
  );
}

export default App;
