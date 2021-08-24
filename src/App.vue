<template>
  <div id="nav">
    <router-link to="/" class="home">Home</router-link> |
    <router-link to="/about" class="about1">About</router-link> |
    <router-link to="/experiencia" class="experiencia">Experiencia</router-link> |
    <router-link to="/estudios" class="estudios">Estudios Realizados</router-link> |
    <router-link to="/estudiosdev" class="estudiosdev">Estudios de Desarrollador</router-link>
  
  <div class="contenido">
  <router-view/>
  </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
  display: flex;
  position: relative;
  z-index: -1;
}
.contenido{
  
  z-index: 1;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.estudiosdev{
    writing-mode: vertical-lr;
    float: right;
}

.about1{
  writing-mode: vertical-lr;
  transform: rotate(180deg);
}

.experiencia{
  transform: rotate(180deg);
}
</style>
