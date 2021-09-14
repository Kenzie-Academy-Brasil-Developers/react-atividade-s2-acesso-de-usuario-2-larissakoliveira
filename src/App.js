import './App.css';
import Home from './Pages/Home'
import members from './Pages/Dados' 
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route>
            <Home members={members} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
