import "./App.css";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Kelompok from './Components/Kelompok/Index';
import Home from './Components/Home/Index';
import Kaos from './Components/Kaos/Index';
import Kemeja from './Components/Kemeja/Index';

function App() {
  return (
    <BrowserRouter>
     <header>
        <div className="title">
          <Link className="text" to="/">
            Kelompok 16
          </Link>
        </div>
        <nav>
          <Link className="text" to="/home">
            Home 
          </Link>
          <Link className="text" to="/kaos">
            Kaos 
          </Link>
          <Link className="text" to="/kemeja">
            Kemeja
          </Link>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Kelompok} />
        <Route path="/home" exact component={Home} />
        <Route path="/kaos" exact component={Kaos} />
        <Route path="/kemeja" exact component={Kemeja} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
