import { Switch, Route, Redirect, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home'
import Contact from './pages/Contact'
import Project from './pages/Project'

function App() {
  return (<div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/project' component={Project} />
      <Redirect to='/' />
    </Switch>
    <Link to='/'>Home</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/project'>Project</Link>
  </div>
  );
}

export default App;
