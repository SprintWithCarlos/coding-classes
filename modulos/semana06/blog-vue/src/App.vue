<template>
  <div id="app">
    <Nav />
    <main>
      <transition name="router-anim">
      <router-view :posts="posts" :users='users' />
    </transition>
    </main>
    <Footer/>
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
main{
  margin-top: 120px;
  margin-bottom: 50px;
}

</style>
<script>
// const URI = 'https://jsonplaceholder.typicode.com/posts';
const URI = 'https://724ec9be-b4e7-4af6-956a-cdf5db978116.mock.pstmn.io/';
//const URI = "http://localhost:3000/api"
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'app',
  components: {
    Nav,
    Footer
  },
  data(){
    return {
      posts: [],
      users: [],
      datos:[]
      }
  },
  // props: ['posts', 'users'],
  created(){
    this.getPosts();
    this.getUsers();
    // this.getData();
  },
  methods:{
    async getPosts(){
      const response = await fetch(URI+ "/posts");
      const postsData = await response.json()
      this.posts = postsData;
    }, 
  
    // getPosts(){
 
    //   fetch('https://724ec9be-b4e7-4af6-956a-cdf5db978116.mock.pstmn.io/posts').then(response => response.json()).then(result => this.posts =result )},
    // getPosts(){
    //   fetch('http://localhost:3000/api/posts').then(response => response.json()).then(result => this.posts = result.data )},

    async getUsers(){
      const response = await fetch(URI + "/users");
      const usersData = await response.json()
      this.users = usersData;
    }, 
    // getData(){
 
    //   fetch('https://724ec9be-b4e7-4af6-956a-cdf5db978116.mock.pstmn.io/posts').then(response => response.json()).then((result) => this.datos =result )
  

    // }

  }
}
</script>
