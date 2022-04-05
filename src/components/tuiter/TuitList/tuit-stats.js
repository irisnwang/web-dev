import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../../../actions/tuits-actions";
const TweetStats = ({tuit}) => {
  const dispatch = useDispatch();
  return (<div className="row mt-2">
  <div className="col">
    <i className="far fa-comment me-2"/>
    {tuit.stats.comments}
  </div>
  <div className="col">
    <i className="fas fa-retweet me-2"/>
    {tuit.stats.retuits}
  </div>
  <div className="col" onClick={() => updateTuit(dispatch, {
        ...tuit,
        stats: {...tuit.stats,
                likes: tuit.stats.likes + 1}
      })}>
    <i className="fas fa-thumbs-up me-2"/>
     {tuit.stats.likes}
  </div>
   <div className="col" onClick={() => updateTuit(dispatch, {
      ...tuit,
      stats: {...tuit.stats,
        dislikes: tuit.stats.dislikes + 1}
    })}>
      <i className="fas fa-thumbs-down me-2"/>
      {tuit.stats.dislikes}
   </div>
  <div className="col">
    <i className="fas fa-external-link-alt me-2"/>
  </div>
</div>)
}

export default TweetStats;