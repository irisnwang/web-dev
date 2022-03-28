import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import '../../vendors/bootswatch/bootstrap.min.css'
import {Link} from "react-router-dom";
import WhoToFollowList from "./WhoToFollowList/index";
import HomeScreen from "./HomeScreen";
// import PostSummaryList from "./PostSummaryList/index";
// import ExploreComponent from "./ExploreScreen/ExploreComponent";
// import ExploreScreen from "./ExploreScreen/ExploreScreen";
import {Outlet} from "react-router-dom";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
const reducer = combineReducers({
  tuits: tuitsReducer, who: whoReducer
});
const store = createStore(reducer);

const Tuiter = () => {
  return (
      <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-lg-1 col-xl-2">
          <NavigationSidebar/>
        </div>
        <div className="col-10 col-lg-7 col-xl-6">
          <Outlet/>
        </div>
        <div className="d-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList/>
        </div>
      </div>
      </Provider>
  );
};
export default Tuiter;
