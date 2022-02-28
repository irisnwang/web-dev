import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
            <div class="row mb-2">
            
    <div class="wd-outline col-10 bg-white">
      <i class="fas fa-search pt-1"></i>
      <input type="text" class="border-0 pt-1 wd-search-bar" placeholder="Search Tuiter">
    </div>

      <div class="col-1">
        <a href="explore-settings.html">
          <i class="fas fa-cog wd-blue-color fa-2x"></i>
        </a>
     
    </div>
                       <!-- search field and cog -->
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                      <li class="nav-item">
        <a class="nav-link active" href="for-you.html">For you</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="trending.html">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="news.html">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="sports.html">Sports</a>
      </li>
      <li class="nav-item d-sm-none d-xxl-block d-xl-block d-lg-block d-md-block">
        <a class="nav-link" href="entertainment.html" tabindex="-1">Entertainment</a>
      </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="card">
        <img src="../rocket.jpg" class="img-fluid card-img" alt="...">
        <div class="card-img-overlay wd-override-card">
          <h3 class="card-title fw-bold text-white">SpaceX's Starship</h3>
        </div>
      </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
