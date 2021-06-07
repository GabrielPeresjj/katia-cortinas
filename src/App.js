import './App.css'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Sobre" component={Sobre} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
