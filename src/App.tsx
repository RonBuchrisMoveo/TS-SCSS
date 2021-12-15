import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { AppHeader } from './js/cmps/AppHeader';
import { MainApp } from './js/pages/MainApp';
import { TeamDetails } from './js/pages/TeamDetails';

// import routes from './routes';


export class App extends React.Component {
  render(){
// function App() {
  return (
    <div className="app-container">
      <AppHeader />
      <main>
        <HashRouter>
          <Switch>
            <Route path="/details/:teamname">{<TeamDetails/>}</Route>
            <Route path="/">{<MainApp/>}</Route>
          </Switch>
        </HashRouter>
      </main>
    </div>

    
  );
}
}


