import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>FullName: Phạm Trọng Hùng</p>
        <p>Class: SE17D08</p>
        <p>School: FPT University</p>
        <p>Description: Iam 19 years old and my major is software engineer. My all time favourite sport is basketball</p>
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
