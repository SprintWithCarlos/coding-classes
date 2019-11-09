<template>
  <div id="userDetails" class=content>
    <div class="user-info" v-for="user in users" :key="user._id">
      <div class="user-content" v-if="id == user._id">
        <img class="avatar" :src="user.avatar" alt="user avatar" />
        <h2 class="user-name">{{user.firstName}} {{user.lastName}}</h2>
        <div class="social-icons">
          <nav>
            <ul>
              <li>
                <a href="#">
                  <img src="../assets/twitter.png" alt="twitter logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../assets/instagram.jpg" alt="instagram logo" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="post-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quae id obcaecati repellendus, sit reiciendis voluptas consequuntur voluptatem minima fugit incidunt quod accusamus harum magni vitae quidem velit commodi praesentium possimus laudantium ipsa deleniti rem repellat! Deleniti illum iste, quibusdam magni eos vero asperiores architecto itaque aliquid natus accusamus.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, dolore.</p>
    </div>
  </div>
</template>
<style>
#userDetails img {
  width: 100%;
  height: 215px;
  object-fit: cover;
  object-position: center center;
}
#userDetails .user-info {
  position: relative;
}
#userDetails .avatar {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-top: 1.875rem;
}

#userDetails .user-content {
  display: flex;
  flex-direction: column;
}
#userDetails .social-icons img {
  width: auto;
  height: 40px;
}
#userDetails .user-name {
  width: 100%;
  text-align: center;
  margin-top: 15px;
}
#userDetails .post-content {
  margin-top: 10px;
  padding: 0 20px;
}
</style>
<script>
export default {
  props: ["id", "users"]
};
</script>