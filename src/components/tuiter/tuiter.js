import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import '../../vendors/bootswatch/bootstrap.min.css'
import {Link} from "react-router-dom";
import WhoToFollowList from "./WhoToFollowList/index";
import PostSummaryList from "./PostSummaryList/index";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
const Tuiter = () => {
  return(
      <div>
        <ExploreScreen/>
        {/*<ExploreComponent/>*/}
        {/*<PostSummaryList/>*/}
        {/*<NavigationSidebar active="home"/>*/}
        {/*<WhoToFollowList/>*/}
        <Link to="/hello">
          Hello
        </Link> |
        <Link to="/">
          Labs
        </Link>
      </div>
  )
};
export default Tuiter;
