<template>
  <div id="users">
    <h1>Who we are?</h1>
    <section class="content">
      <article v-for="user in users" :key="user.id" class="card">
      <a :href="'/users/' + user.id">
        <figure>
          <img :src="user.avatar" alt="user avatar" />
        </figure>
      </a>

      <div class="card-text">
        <h3>{{user.name}}</h3>
        <small>{{user.email}}</small>
      </div>
    </article>
    </section>
  </div>
</template>
<style>
/* .body {
  margin: 0 auto;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
} */
#users .card {
  width: calc(100% - 70px);
  height: auto;
  background: #dfdfdf;
  box-shadow: 6px 8px 6px rgba(0, 0, 0, 0.26);
  display: flex;
  margin: 0 auto 20px auto;
  padding: 32px 20px;
}
#users .card-text {
  margin-left: 10px;
  text-align: left;
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  width: 110px;
}

#users img {
  width: 5.3125rem;
  height: 5.3125rem;
  object-fit: cover;
  border-radius: 50%;
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
</style>

<script>
export default {
  props: ["users"]
};
</script>