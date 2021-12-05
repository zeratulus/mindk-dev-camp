import logo from './logo.svg';
import './App.css';
import {UserPostContainer} from "./containers/userPost";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserPostContainer content={'Just some example of userPost content...'} />
      </header>
    </div>
  );
}

export default App;
