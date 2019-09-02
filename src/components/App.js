import React from 'react';
import DxPLayer from './DxPlayer/DxPLayer';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/" component={DxPLayer} /> 
        <Route to="/:active_video" component={DxPLayer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
