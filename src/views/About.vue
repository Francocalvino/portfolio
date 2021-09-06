<template>
  <div class="about">
    <div class="container">
      <div class="cont descripcion">
        <h2>Presentación</h2>
        <p>Soy una persona proactiva curiosa y sincera. A traves de la busqueda activa de aprendisaje conocí el mundo del desarrollo, donde desde un comienzo me forme de la mano del BootCamp de FACTORIA F5 (Desarrollo Front-End, 300hs, Desarrollo Full-Stack 850hs)complementandolos con cursos y documentacion encontrada en internet.
          Actualmente estoy en busqueda de un trabajo en el que pueda poner en practica mis conocimientos y me forme profesionalmente para seguir creciendo en el mundo profesiona del desarrollo y diseño web.
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
h2{
  text-decoration: underline #2c3e50;
}
.container{
  
  height: 92vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  align-items: center;
  
}
.cont{
   /* background:  radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 56%, rgba(195,230,222,1) 100%); *//* linear-gradient(90deg, rgba(165,214,203,1) 0%, rgba(165,189,184,1) 39%, rgba(170,186,181,1) 49%, rgba(187,214,198,1) 100%); */
  border: 7px solid;
  border-color: #c3e6de;
  padding: 3%;
  width: fit-content;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 255, .2);
  border-radius: 2.5rem;
  margin-top: 0 !important;
}



</style>