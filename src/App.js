import './App.css';
import Home from './Pages/Home'
import members from './Pages/Dados' 
import {Switch, Route} from "react-router-dom"
import Customer from './Pages/Customer'
import Company from './Pages/Company'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path='/'>
            <Home members={members} />
          </Route>
          <Route path="/customer/:id">
            <Customer members={members} />
          </Route>
          <Route path="/company/:id">
            <Company members={members} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;