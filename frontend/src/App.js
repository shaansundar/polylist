import JobBoard from './components/JobBoard';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="flex flex-col justify-start items-center">
      <Header/>
      <JobBoard/>
    </div>
  );
}

export default App;
