const PostSummaryListItem = (posts) => {
  return(`
        
        <li class="list-group-item">
          <div class="row">
            <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-9">
              <div class="wd-gray-color">${posts.topic}</div>
              <div><span class="fw-bold">${posts.userName}</span> <span><i class="fas fa-check-circle"></i> </span> <span class="wd-gray-color">- ${posts.time}</span> </div>
              <div class="small fw-bold">${posts.title}</div>
              <div class="wd-gray-color">${posts.tweets}</div>

            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3">
              <img src=${posts.image} class="rounded-3 wd-post-img"/>
            </div>
          </div>
        </li>
<!--        format these properly -->
            
            
           
        `);
}
export default PostSummaryListItem;