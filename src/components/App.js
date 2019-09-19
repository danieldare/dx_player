import React from 'react';
import DxPLayer from './DxPlayer/DxPLayer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from './DxPlayer/DxPlayer.style';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact to="/" component={DxPLayer} /> 
        <Route exact to="/:activeVideo" component={DxPLayer}/>
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
