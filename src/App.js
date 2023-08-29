
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar.jsx'
import Financial from'../src/Components/Financial/Financial.jsx'
import Retirement from '../src/Components/Retirement/Retirement.jsx'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Financial></Financial>
      <Retirement></Retirement>
    </div>
  );
}

export default App;
