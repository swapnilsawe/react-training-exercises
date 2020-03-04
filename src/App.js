import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {ReviewHeader} from './reviewExercise/component/ReveiwHeader';
import { ReviewContainer } from './reviewExercise/component/ReviewContainer';
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2>This is react training Review exercise</h2>
        </header>
      </div>
      <div className="App-sub-header">
        <ReviewHeader headerName="Review Exercise"/>
      </div>
      <div className="App-container">
        <ReviewContainer leftColVisible="true"/>
      </div>
    </>
  );
}

export default App;
