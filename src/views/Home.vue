<template>
  <div class="all">
    <div class="home">
       <div class="textoBienvenida">
         <div class="centro a">
        
          <p class="al">portfolio </p>
          <p class="de">de</p>
          <p class="fc">franco calviño </p>
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

  background-image: linear-gradient(to right, #A5D6CB , #BBD6C6);
  width: 100%;
  display:flex;
  align-items:center;
}
.imgFranco {
  width: 95vw;
  max-height: 92vh;
  object-fit: contain;
  position: relative; 
  z-index: 0 ;
  display: flex;
  align-items: center;
}
.textoBienvenida {
  font-family: 'Major Mono Display';
  font-weight: 900;
  position: absolute; 
  z-index: 1;
  width: 95vw;
  height: 95 vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.a {
  font-size: 1.4rem;
  height: 45%;
  width: 30%;
  font-weight: bolder;
}
.bienvenido{
  text-align: left !important;
}

.fc{
  margin-left:30%;
  margin-top: 10%;
  font-size: 1.6rem;
  
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
  
  margin-right: 8%;
}


</style>


<script>

</script>
