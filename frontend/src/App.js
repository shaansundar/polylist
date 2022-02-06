import JobBoard from './components/JobBoard';
import './App.css';
import Header from './components/Header';
import NewJob from './components/NewJob';
import React from 'react';

function App() {
  return (
    <div className="flex flex-col justify-start items-center">
      <Header/>
      <NewJob/>
      <JobBoard/>
    </div>
  );
}

export default App;
