import React from "react";
import '../../../vendors/bootstrap/css/bootstrap.min.css'
import '../index.css'

const WhoToFollowListItem = ({
      who = {
        avatarIcon: '/tuiter/nasa.jpg',
        userName: 'NASA',
        handle: 'NASA',
      }
    }) => {
  return(
        
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img src={who.avatarIcon} className="rounded-circle wd-maxi-avatar" alt="pfp"/>
          </div>
          <div className="col-lg-6 col-xxl-7 col-xl-7">
            <div className="fw-bold text-nowrap">
              {who.userName} <span><i className="fas fa-check-circle"/> </span>
            </div>
            <div>
              @{who.handle}
            </div>
          </div>
          <div className="col-lg-4 col-xxl-3 col-xl-3">
            <button className="mt-1 btn btn-primary btn-block rounded-pill">
              Follow
            </button>
          </div>
        </div>
      </li>

);
}
export default WhoToFollowListItem;