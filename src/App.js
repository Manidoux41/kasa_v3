import React from "react";
import { BrowserRouter } from "react-router-dom";
import PublicRouter from "./pages/Public/PublicRouter";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <PublicRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
