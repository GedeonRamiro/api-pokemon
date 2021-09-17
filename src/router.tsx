import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'

const Routes: React.FC = () => {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:pokemon">
                <Pokemon />
            </Route>
          </Switch>
      </Router>
    );
  }

  export default Routes;