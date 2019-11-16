<template>
    <div id="nav">
      <div class="nav-bar">
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link to="/signup">Sign Up</router-link> 
        <router-link to="/login">Login</router-link> 
      </div>
    </div>
</template>
<style>
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
</style>
<script>
export default {
  name: 'Nav',
}
</script>