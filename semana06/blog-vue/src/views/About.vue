<template>
  <div class="about">
    <h1>This is an about page</h1>
    <article v-for="user of users" v-bind:key="user.id">
      <h1>{{user.name}}</h1>
      <p>{{user.email}}</p>
    </article>
  </div>
</template>
<script>
 const URI = 'https://jsonplaceholder.typicode.com/users';
export default {
  data(){
    return {
      users: []
      }
  },
  created(){
    this.getUsers()
  },
  methods:{
    async getUsers(){
      const response = await fetch(URI);
      const data = await response.json()
      this.users = data;
    } 
  }
}
</script>
