import React from "react";
import PostSummaryListItem from "./PostSummaryListItem.js";
import posts from "./posts.json"

const PostSummaryList = () => {
  return (
            <ul className="list-group">
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