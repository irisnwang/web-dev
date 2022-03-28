// Tuit items taken
import '../index.css'
import {useDispatch} from "react-redux";
import '../../../vendors/bootstrap/css/bootstrap.min.css'
import '../../../vendors/fontawesome/css/fontawesome.min.css'
import TweetStats from "./tuit-stats";


const TuitListItem = ({
    key,
  tuit = {
    "topic": "Web Development",
    "postedBy": {"userName": "ReactJS"},
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "logoimage": "/tuiter/react.png"
  }
}) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({type: 'delete-tuit', tuit})
  };
  return(
      <li className="list-group-item">
        <table>
          <tr>
            <td className="align-text-top">
              <img className="rounded-circle wd-maxi-avatar"
                   src={tuit['logoimage']}/>
            </td>
            <td className="ps-3" style={{width: '100%'}}>
              <i onClick={() =>
                  deleteTuit(tuit)}
                 className="fas fa-times fa-pull-right"/>
              <span className="fw-bold">{tuit.postedBy.username}</span>
              {tuit.verified && <i className="ms-1 fas fa-check-circle"/>}
              <span className="ms-1 text-secondary">@{tuit.handle}</span>
              <div>
                {tuit.tuit}
              </div>
              {
                tuit.attachments && tuit.attachments.image &&
                <img src={tuit.attachments.image}
                     className="mt-2 wd-outline"
                     style={{width: "100%"}}/>
              }
              {
                tuit.attachments && tuit.attachments.video &&
                <iframe width="100%" height="350px"
                        className="mt-2 wd-outline"
                        style={{width: "100%"}}
                        src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              }
              {/*{JSON.stringify(tuit)}*/}
              <TweetStats tuit={tuit}/>
            </td>
          </tr>
        </table>
      </li>
  );
}
export default TuitListItem;