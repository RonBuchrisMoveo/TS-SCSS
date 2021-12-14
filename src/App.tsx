import React from 'react';
import { AppHeader } from './js/cmps/AppHeader';
import { MainApp } from './js/pages/MainApp';


export class App extends React.Component {

  render() {
    return (
      <div className="app-container">
        <AppHeader />
        <main>
          <MainApp />
        </main>
      </div>
    );
  }
}


