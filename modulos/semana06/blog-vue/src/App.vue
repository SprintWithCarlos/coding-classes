<template>
  <div id="app">
    <div id="nav">
      <div class="nav-bar">
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link> 
      </div>
    </div>
    <main>
      <transition name="router-anim">
      <router-view :posts="posts" :users='users' />
    </transition>
    </main>
    <footer>
    <p>© Carlos Marchena 2019</p>
  </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
body, figure, ul, li, h2, h3, h5, p{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

#nav {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100px;
  padding-bottom: 10px;
  background: #C4C4C4;
}
.nav-bar{
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
}
footer {
  margin-top: 40px;
  width: 100%;
  height: 40px;
  background: #C4C4C4;
  display: flex;
  align-items: center;
  justify-content: center
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  width: 69px;
  height: 26px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.router-anim-enter-active{
  animation: coming 1s;
  animation-delay: 1s;
  opacity:0
}
.router-anim-leave-active{
  animation: going 1s;
}
@keyframes going {
  from{
    transform: translateX(0)
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from{
    transform: translateX(-50px);
    opacity: 0;
  }
  to{
    transform: translateX(0);
    opacity: 1;
  }
  
}
main{
  margin-top: 120px;
  margin-bottom: 50px;
}
footer{
  position: fixed;
  bottom: 0;
  width: 100;
}
</style>
<script>
// const URI = 'https://jsonplaceholder.typicode.com/posts';
const URI = 'https://724ec9be-b4e7-4af6-956a-cdf5db978116.mock.pstmn.io/';
export default {
  data(){
    return {
      posts: [],
      users: []
      }
  },
  // props: ['posts', 'users'],
  created(){
    this.getPosts();
    this.getUsers()
  },
  methods:{
    async getPosts(){
      const response = await fetch(URI+ "/posts");
      const data = await response.json()
      this.posts = data;
    } ,
    async getUsers(){
      const response = await fetch(URI + "/users");
      const usersData = await response.json()
      this.users = usersData;
    } 
  }
}
</script>
