import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter/tuiter";
import {BrowserRouter, Route, Routes}
  from "react-router-dom";
import ExploreComponent from "./components/tuiter/ExploreScreen/ExploreComponent";
import HomeScreen from "./components/tuiter/HomeScreen";
function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes path="/">
            <Route index element={<Labs/>}/>
            <Route path="hello"
                   exact={true}
                   element={<HelloWorld/>}/>
            <Route path="labs"
                   exact={true}
                   element={<Labs/>}/>
            <Route path="tuiter"
                   exact={true}
                   element={<Tuiter/>}>
              <Route path="explore"
                     element={<ExploreComponent/>}/>
              <Route index
                     element={<HomeScreen/>}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}



export default App;
