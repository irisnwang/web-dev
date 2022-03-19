import React from "react";
import PostSummaryList from "../PostSummaryList/index";
import "../index.css"

const ExploreComponent = () => {
  return(
      <div>
        <div className="row mb-2">

          <div className="wd-outline col-10 bg-white">
            <i className="fas fa-search pt-1"/>
            <input type="text" className="border-0 pt-1 wd-search-bar" placeholder="Search Tuiter"/>
          </div>

          <div className="col-1">
            <a href="#">
              <i className="fas fa-cog wd-blue-color fa-2x"/>
            </a>

          </div>
        </div>
        <ul className="nav mb-2 nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">For you</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Trending</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sports</a>
          </li>
          <li className="nav-item d-sm-none d-xxl-block d-xl-block d-lg-block d-md-block">
            <a className="nav-link" href="#" tabIndex="-1">Entertainment</a>
          </li>
        </ul>
        <div className="card">
          <img src="/tuiter/rocket.jpg" className="img-fluid card-img" alt="..."/>
          <div className="card-img-overlay wd-override-card">
            <h3 className="card-title fw-bold text-white">SpaceX's Starship</h3>
          </div>
        </div>
        <PostSummaryList/>
      </div>
  );}

export default ExploreComponent;
