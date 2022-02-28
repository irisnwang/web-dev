const WhoToFollowListItem = (who) => {
  return(`
        
      <li class="list-group-item">
        <div class="row">
          <div class="col-2">
            <img src=${who.avatarIcon} class="rounded-circle wd-maxi-avatar" alt="pfp"/>
          </div>
          <div class="col-lg-6 col-xxl-7 col-xl-7">
            <div class="fw-bold text-nowrap">
              ${who.userName} <span><i class="fas fa-check-circle"></i> </span>
            </div>
            <div>
              @${who.handle}
            </div>
          </div>
          <div class="col-lg-4 col-xxl-3 col-xl-3">
            <button class="mt-1 btn btn-primary btn-block wd-override-bs">
              Follow
            </button>
          </div>
        </div>
      </li>

`);
}
export default WhoToFollowListItem;