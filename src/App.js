import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main><p>This is the page content</p></main>
      
    </div>
  );
}

export default App;
