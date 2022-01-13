import './App.css';
import {AppHeaderContainer} from "./containers/header";
import {AppBodyContainer} from "./containers/body";

function App() {

    return (
        <div className="App">
            <AppHeaderContainer/>
            <AppBodyContainer/>
        </div>
    );
}

export default App;
