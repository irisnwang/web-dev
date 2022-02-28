import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
  return (`
            <ul class="list-group">
            ${who.map(who => {return(WhoToFollowListItem(who));}).join('')}
            <!-- map function whotofollowlistitem on array who -->
            </ul>
`); }

export default WhoToFollowList
