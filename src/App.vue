<template>
  <div id="nav">
    <div class="top">
      <router-link to="/" class="home">Home</router-link> |
      <router-link to="/about" class="about1">About</router-link> 
    </div>
    <div class="medio">

      <router-link to="/experiencia" class="experiencia">Experiencia</router-link> 
      <div class="contenido">
       <router-view/>
       </div>
      <router-link to="/estudios" class="estudios">Estudios Realizados</router-link> 
    </div> 
    
    <div class="footer">

      <router-link to="/estudiosdev" class="estudiosdev">Estudios de Desarrollador</router-link>
       
      </div>
    
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Bungee&family=Special+Elite&display=swap');

#app {
  font-family: 'Alata', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-decoration: none;
}


.contenido{
  width: 90vw;
  height: 90vh;
  
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
  width: 100vw;
  height: 100vh;
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
  width: 100%;
}

.footer{
  display: flex;
  justify-content:center;
}
</style>
