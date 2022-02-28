import PostSummaryListItem from "./PostSummaryListItem.js";
import posts from "./posts.js"

const PostSummaryList = () => {
  return (`
            <ul class="list-group">
            ${posts.map(posts => {return(PostSummaryListItem(posts));}).join('')}
            <!-- map function whotofollowlistitem on array who -->
            </ul>
`); }

export default PostSummaryList