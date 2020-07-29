import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Page404 = ()=> (
  <div id="Page404">
    <h1>ALGO DEU ERRADO!</h1>
    <h2>
      SUAS OPÇÕES:
    </h2>
    <ul>
      <li><a href="/">Voltar pra home</a></li>
      <li><a href="https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej">aprender a fazer o jogo</a></li>
      <li>Jogar</li>
    </ul>
    <iframe
        title="Flappy Bird Game"
        src="https://mariosouto.com/flappy-bird-devsoutinho/"
        width="400"
        height="600" />
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/Video" component={CadastroVideo}/>
      <Route path="/cadastro/Categoria" component={CadastroCategoria}  />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
