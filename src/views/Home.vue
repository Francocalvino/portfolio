<template>
  <div class="all">
    <div class="home">
       <div class="textoBienvenida">
         <div class="centro a">
        
          <p class="al">Portfolio </p>
          <p class="de">de</p>
          <p class="fc">Franco Calviño </p>
        </div>
        <div class="centro b">
      
        </div>
        <div class="centro c">
          <p>Desarrollador </p>
          <p>Front End</p>
        </div>
      </div>
      <img class="imgFranco" alt="Foto Franco Calviño" src="../assets/francotest4.png">
    </div>
  </div>
</template>

<style scoped>

.home{
  background-color:silver;
}
.imgFranco {
  max-width: 100vw;
  max-height: 100vh;
  object-fit: cover;
  position: relative; 
  z-index: 0 ;
}
.textoBienvenida {
  font-family: 'Special Elite', cursive;
  position: absolute; 
  z-index: 1;
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.a {
  height: 45%;
  width: 25%;
  margin-left: 7%;
  font-family: 'Staatliches';
}
.bienvenido{
  text-align: left !important;
  margin-left: 8%;
}
.de{
  margin-right: 10%;
}
.fc{
  margin-left:30%;
  margin-top: 10%;
  font-size: 1.5rem;
  font-weight: 500;
  height: 10%;
  transition: text-decoration 5s, font-size 2s;
}

.fc:hover{
  font-size: 1.7rem ;
  
}

.c{
  width: 20%;
  font-family: 'Major Mono Display';
  font-size: 1.4em;
  
  margin-right: ;
}


</style>


<script>

</script>
