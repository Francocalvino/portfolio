<template>
  <div id="nav">
    <div class="top">
      <router-link to="/" class="home">Home  </router-link> |
      <router-link to="/about" class="about1">  About </router-link> 
    </div>
    <div class="medio">

      <router-link to="/experiencia" class="experiencia">eXpeRienciA lAboRAl </router-link> 
      <div class="contenido">
       <router-view/>
       </div>
      <router-link to="/estudios" class="estudios">estudios RealiZAdos</router-link> 
    </div> 
    
    <div class="footer">

      <router-link to="/estudiosdev" class="estudiosdev">pRoYectos de desARRollo</router-link>
       
      </div>
    
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Goldman&family=Major+Mono+Display&family=Megrim&family=Staatliches&family=Stardos+Stencil&family=Wallpoet&family=Zen+Dots&display=swap');

#app {
  font-family: 'Major Mono Display', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-decoration: none;
  margin: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;

}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav{
  display:block;
  margin: 0;
  padding: 0;
  z-index: 99;
  height: 100%;
  width: 100%;
}

.contenido{
  max-width: 100vw;
  max-height: 93vh;
  min-height: 93vh;
  z-index: 1;
}

.experiencia{
  writing-mode: vertical-rl;
  transform: rotate(0deg);
  text-decoration: none;
  
}

.estudios{
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  text-decoration: none;
}
.estudiosdev{
  text-decoration: none;
}
.home{
  text-decoration: none;
}
.about1{
  text-decoration: none;
}
.top{
  display: flex;
  justify-content: center;
}

.medio{
  display: flex;
  justify-content: space-between;
  width: 98vw;
}

.footer{
  display: flex;
  justify-content:center;
}
</style>
