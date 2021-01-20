import React from "react";
import { HashRouter, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import "./App.css";

//라우터가 작성될 페이지
//SPA 구현 , 라우터 사용하여 두 개의 페이지 전환 성공
function App(){
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
  </HashRouter>;
}

export default App;