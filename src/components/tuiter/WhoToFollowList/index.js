import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who"

const WhoToFollowList = () => {
  return (
            <ul className="list-group">
              {
                who.map(who => {
                  return(
                      <WhoToFollowListItem who={who}/>
                  );
                })
              }
            </ul>
); }

export default WhoToFollowList
