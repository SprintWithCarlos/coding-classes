<template>
  <div class="about">
    <h1>Our Blog</h1>
    <section class="content">
      <article v-for="post in posts" :key="post.id" class="card">
        <figure>
  
          <img :src="post.postImg" alt="post image" />
        </figure>
        <div class="card-text">
          <h2>{{post.title}}</h2>
          <p class="body">{{post.description}}</p>
          <a :href="'/posts/' + post.id">Read More</a>

          <div class="user-info" v-for="user in users" :key="user.id">
            <div v-if="post.userId === user.id" class="user-content">
              <div class="w30">
                <a :href="'/users/' + user.id">
                  <img :src="user.thumbnail" alt="user avatar" class="thumbnail" />
                </a>
              </div>
              <div class="w70">
                <p class="user-name">{{user.name}}</p>
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
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
<style>
.body {
  margin: 0 auto;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card {
  width: calc(100% - 70px);
  height: 162px;
  background: #dfdfdf;
  box-shadow: 6px 8px 6px rgba(0, 0, 0, 0.26);
  display: flex;
  margin: 0 auto 20px auto;
  padding: 32px 20px;
}
.card-text {
  margin-left: 10px;
  text-align: left;
  width: 55%;
  position: relative;
}
.user-info {
  display: flex;
  position: absolute;
  bottom: 0;
}
.user-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.user-name {
  width: 6.875rem;
  font-size: 0.8rem;
}

img {
  width: 7rem;
  height: 10rem;
  object-fit: cover;
}
.w30 {
  width: 30%;
  display: flex;
  justify-content: left;
  align-items: center;
}
.w70 {
  width: 70%;
}
.thumbnail {
  width: 2.375rem;
  height: 2.375rem;
  object-fit: cover;
  border-radius: 50%;
}
.social-icons {
  display: flex;
}
.social-icons img {
  width: 1.125rem;
  height: 1.125rem;
}
.social-icons ul {
  list-style-type: none;
  display: flex;
}
@media screen and (min-width: 321px) {
  .user-name {
    font-size: 0.9rem;
  }
  img {
    width: 17.75rem;
  }
  .content{
    max-width:503px;
    margin: 0 auto;
  }
}
</style>

<script>
export default {
  props: ["posts", "users"]
};
</script>