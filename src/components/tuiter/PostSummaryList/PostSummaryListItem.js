import '../index.css'
import '../../../vendors/bootstrap/css/bootstrap.min.css'

const PostSummaryListItem = ({
      posts = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "/tuiter/react.png"
      }
    }) => {
  return(
        
        <li className="list-group-item">
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-9">
              <div className="wd-gray-color">{posts.topic}</div>
              <div><span className="fw-bold">{posts.userName}</span> <span><i className="fas fa-check-circle"/> </span> <span className="wd-gray-color">- {posts.time}</span> </div>
              <div className="small fw-bold">{posts.title}</div>
              <div className="wd-gray-color">{posts.tweets}</div>

            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3">
              <img src={posts.image} className="rounded-3 wd-post-img" alt="pfp"/>
            </div>
          </div>
        </li>
  );
}
export default PostSummaryListItem;