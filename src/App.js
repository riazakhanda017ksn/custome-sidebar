import logo from './logo.svg';
import './App.css';
import MainDashboard from './components/MainDashboard/MainDashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <MainDashboard></MainDashboard>
        </Route>
      
        
      </Switch>
  </Router>
  );
}

export default App;
