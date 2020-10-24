import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Hoteles from '../Hoteles/Hoteles';

function App() {
     return(
          <BrowserRouter>
               <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/hoteles" component={Hoteles} />
               </Switch>
          </BrowserRouter>

     );
}

export default App;