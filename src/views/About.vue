<template>
  <div class="about">
    <div class="container">
      <div class="cont descripcion">
        <h2>Presentación</h2>
        <p>Soy una persona proactiva curiosa y sincera. A traves de la busqueda activa de aprendisaje conoci el mundo del desarrollo, donde desde un comienzo me forme de la mano del BootCamp de FACTORIA F5 (Desarrollo Front-End, 300hs, Desarrollo Full-Stack 850hs)complementandolos con cursos y documentacion encontrada en internet.
          Actualmente estoy en busqueda de un trabajo en el que pueda poner en practica mis conocimientos y me forme profesionalmente para seguir creciendo en el mundo del desarrollo y diseño web.
        </p>

      </div>
      <div class="cont datosPersonales">
        <h2>Datos personales</h2>
        <p class="datos">Email: francocalvino89@gmail.com</p> <!-- puede ser input -->
        <p class="datos">Telefono de Contacto: +34 674-845-505</p>
        <p class="datos">LinkedIn: <a href=""> paginaLinkedIn</a> </p>
        <p class="datos">GitHub: <a href=""> LinkGitHub </a></p>
        
      </div>
      
    </div>
  </div>
</template>
<style scoped>
.about{
  display: grid;
  flex-direction: column;
  height: 100%;
  align-content: baseline;
}
.container{
  
  height: 100vh;
  width: auto;
  display: block;
  align-content: space-between;
  
}
.cont{
   background: linear-gradient(90deg, rgba(165,214,203,1) 0%, rgba(165,182,179,1) 50%, rgba(187,214,198,1) 100%);
  padding: 3%;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 255, .2);
  border-radius: 2.5rem;
  margin-top: 0 !important;
}
.datosPersonales{
  margin-top: 3rem !important;
}


</style>