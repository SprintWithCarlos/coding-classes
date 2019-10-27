<template>
  <div class="about">
    <h1>This is the page for post with ID: {{post.id}}</h1>
    <article>
      <h1>{{post.title}}</h1>
      <p>{{post.body}}</p>
    </article>
  </div>
</template>
<script>
 const URI = 'https://jsonplaceholder.typicode.com/posts/';
export default {
    props: ['id'],
  data(){
    return {
      post: []
      }
  },
  created(){
    this.getPost()
  },
  methods:{
    async getPost(){
      const response = await fetch(URI + this.id);
      const data = await response.json()
      this.post = data;
    } 
  }
}
</script>
