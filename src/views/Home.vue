<template>
  <div class="all">
    <div class="home">
       <div class="textoBienvenida">
         <div>
        <p>Bienvenido al Portfolio de</p>
        <p>Franco Calviño </p>
        </div>
        <div>
        <p>Desarrollador </p>
        <p>Front End</p>
        </div>
      </div>
      <img class="imgFranco" alt="Foto Franco Calviño" src="../assets/imgFranco.jpg">
    </div>
  </div>
</template>

<style scoped>

.home{
  background-color:silver;
}
.imgFranco {
  width: 90vw;
  height: 90vh;
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


</style>


<script>

</script>
