<template>
  <div id="postDetails">
    <div class="article-content" v-for="post in posts" :key="post._id">
      <div v-if="post._id == id">
        <figure>
          <img :src="post.postImg" alt="image pic" />
        </figure>
        <section class="content">
          <h1>{{post.title}}</h1>
          <div class="user-info" >
            <div class="user-content" >
              <img class="avatar" :src="post.author.avatar" alt="user avatar" />
              <h2 class="user-name">{{post.author.firstName}} {{post.author.lastName}}</h2>
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
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<style>
#postDetails img {
  width: 100%;
  height: 215px;
  object-fit: cover;
  object-position: center center;
  margin-top: -10px;
}
#postDetails .user-info {
  position: relative;
}
#postDetails .avatar {
  width: 128px;
  height: 128px;
  border-radius: 50%;
}

#postDetails .user-content {
  display: flex;
  flex-direction: column;
}
#postDetails .social-icons img {
  width: auto;
  height: 30px;
  margin-top: 10px;
}
#postDetails .user-name {
  width: 100%;
  text-align: center;
  margin-top: 15px;
}
#postDetails .post-content {
  margin-top: 10px;
  padding: 0 20px;
}
@media screen and(min-width:321px) {
  #postDetails img {
    height: 315px;
  }
}
</style>
<script>
export default {
  props: ["posts", "id", "users"]
};
</script>