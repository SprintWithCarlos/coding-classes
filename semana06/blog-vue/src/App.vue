<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/posts">Posts</router-link>
    </div>
    <transition name="router-anim">
      <router-view/>
    </transition>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
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
</style>
