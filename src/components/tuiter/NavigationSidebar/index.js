import React from "react";
const NavigationSidebar = ({active = 'explore'}) => {
  return(
      <div>
        <div className="list-group">
          <a className="list-group-item" href=".">
            <i className="fab fa-twitter"/></a>
          <a href="/tuiter" className="list-group-item">
            <i className="fas fa-home fa-inverse"/>
            <span className="d-none d-xxl-inline d-xl-inline"> Home</span></a>
          <a href="/tuiter/explore" className="list-group-item active">
            <i className="fas fa-hashtag fa-inverse"/>
            <span className="d-none d-xxl-inline d-xl-inline"> Explore</span></a>
          <a href="/tuiter" className="list-group-item">
            <i className="fas fa-bell fa-inverse"/>
            <span className="d-none d-xxl-inline d-xl-inline"> Notifications</span></a>
          <a href="/tuiter" className="list-group-item">
            <i className="fas fa-envelope fa-inverse"/>
            <span className="d-none d-xxl-inline d-xl-inline"> Messages</span></a>
          <a href="/tuiter" className="list-group-item">
            <i className="fas fa-bookmark fa-inverse"/>
            <span className="d-none d-xxl-inline d-xl-inline"> Bookmarks</span></a>
          <a href="/tuiter" className="list-group-item">
            <i className="fas fa-list fa-inverse"/>
            <span className="d-none d-xxl-inline d-xl-inline"> Lists</span></a>
          <a href="/tuiter" className=" list-group-item">
            <i className="fas fa-user fa-inverse"/>
            <span className="d-none d-xxl-inline d-xl-inline"> Profile</span></a>
          <a href="/tuiter" className="list-group-item p-0">
            <div className="fa-stack">
              <i className="fas fa-circle fa-stack-1x"/>
              <i className="fas fa-ellipsis-h fa-xs fa-stack-1x text-black"/>
            </div>
            <span className="d-none d-xxl-inline d-xl-inline"> More</span></a>
        </div>
        <div className="d-grid mt-2">
          <a href="/tuiter"
             className="btn btn-primary btn-block rounded-pill">
            Tweet</a>
        </div>
      </div>
  );
}
export default NavigationSidebar;
