const NavigationSidebar = () => {
  return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                    <a href="../home.html" class="list-group-item">
        <i class="fas fa-home fa-inverse"></i>
      <span class="d-none d-xxl-inline d-xl-inline"> Home</span></a>
      <a href="#" class="list-group-item active">
        <i class="fas fa-hashtag fa-inverse"></i>
      <span class="d-none d-xxl-inline d-xl-inline"> Explore</span></a>
      <a href="#" class="list-group-item">
        <i class="fas fa-bell fa-inverse"></i>
      <span class="d-none d-xxl-inline d-xl-inline"> Notifications</span></a>
      <a href="#" class="list-group-item">
        <i class="fas fa-envelope fa-inverse"></i>
      <span class="d-none d-xxl-inline d-xl-inline"> Messages</span></a>
      <a href="../bookmarks.html" class="list-group-item">
        <i class="fas fa-bookmark fa-inverse"></i>
      <span class="d-none d-xxl-inline d-xl-inline"> Bookmarks</span></a>
      <a href="#" class="list-group-item">
          <i class="fas fa-list fa-inverse"></i>
        <span class="d-none d-xxl-inline d-xl-inline"> Lists</span></a>
      <a href="../profile.html" class=" list-group-item">
          <i class="fas fa-user fa-inverse"></i>
        <span class="d-none d-xxl-inline d-xl-inline"> Profile</span></a>
      <a href="#" class="list-group-item p-0">
        <div class="fa-stack">
          <i class="fas fa-circle fa-stack-1x"></i>
          <i class="fas fa-ellipsis-h fa-xs fa-stack-1x text-black"></i>
        </div>
        <span class="d-none d-xxl-inline d-xl-inline"> More</span></a>
            <!-- continue the rest of the list -->
            </div>
            <div class="d-grid mt-2">
                <a href="../../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
