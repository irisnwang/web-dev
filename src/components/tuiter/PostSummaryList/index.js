import React from "react";
import PostSummaryListItem from "./PostSummaryListItem.js";
import posts from "./posts.json"
import who from "../WhoToFollowList/who.json";
import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem";

const PostSummaryList = () => {
  return (
            <ul class="list-group">
              {
                posts.map(posts => {
                  return(
                      <PostSummaryListItem posts={posts}/>
                  );
                })
              }
            </ul>
); }

export default PostSummaryList