<template>
  <div class="about">
    <h1>This is the posts page</h1>
    <article v-for="post of posts" v-bind:key="post.id">
      <h1>{{post.title}}</h1>
      <p>{{post.body}}</p>
      <a :href="'/posts/' + post.id">Read More</a>
    </article>
  </div>
</template>
<script>
 const URI = 'https://jsonplaceholder.typicode.com/posts';
export default {
  data(){
    return {
      posts: []
      }
  },
  created(){
    this.getPosts()
  },
  methods:{
    async getPosts(){
      const response = await fetch(URI);
      const data = await response.json()
      this.posts = data;
    } 
  }
}
</script>
