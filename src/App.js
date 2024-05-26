import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import AppRouter from "./routes/AppRouter";

class App extends Component{
  render() {
    return (
      <Routes>
        <Route path={"/*"} element={<AppRouter/>}></Route>
      </Routes>
    )
  }
}

export default App;
