import './App.css';
import {useContext, useState} from "react";
import {AppHeaderContainer} from "./containers/header";
import {AppBodyContainer} from "./containers/body";
import {Context} from "./context/context";

function App() {

    const [visibleComponent, setVisibleComponent] = useState("add_post");

    return (
        <Context.Provider value={[visibleComponent, setVisibleComponent]}>
            <div className="App">
                <AppHeaderContainer/>
                <AppBodyContainer/>
            </div>
        </Context.Provider>
    );
}

export default App;
