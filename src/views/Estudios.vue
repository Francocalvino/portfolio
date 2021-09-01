<template>
  <section class="contenido">
  <div class="contenedor izq">
        <h1>Formación</h1>
    <ul>
      <li>BootCamp  Desarrollador Full-Stack 850Hs Factoria f5</li>
      <li>BootCamp Desarrollo Front-End 300Hs Factoria F5</li>
      <li>Fundamentos del Diseño UX/UI  Barcelona Activa</li>
      <li>Profesional Gastronomico, Instituto Argentino Gastronomico </li>
    </ul>
  </div>
    <section class="contenedor der">
      <h2>Idiomas</h2>
        <ul>
        <li>Español, Nativo</li>
        <li>Ingles, B2</li>
        </ul>
      <h2>Habilidades</h2>
        <ul>
          <li>Maquetación</li>
          <li>OOP</li>
          <li>Programacion MVC</li>
          <li>Diseño Web</li>
          <li>CleanCode</li>
          <li>Test</li>
          <li>Trabajo en Equipo</li>
        </ul>
    </section>
  </section>
 

  
</template>
<style scoped>
ul{
  list-style:none;
  line-height: 120%;
  padding:0;
  
}
.contenido{
  display: flex;
  justify-content: space-around;
  width: 95vw;
  margin: 0;
}
.contenedor{
  
  width: 37vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  padding: 3rem;
  height: 77.5vh;
  margin: 0;
  border-radius: 2.5rem;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 255, .2);
}
.izq{
  background: linear-gradient(90deg, rgba(165,214,203,1) 0%, rgba(165,189,184,1) 78%, rgba(170,186,181,1) 100%);
}
.der{
   background: linear-gradient(90deg, rgba(170,186,181,1) 39%,rgba(187,214,198,1) 100%);
   justify-content: space-evenly;
}
.izq li{
  margin-bottom: 10%;
  margin-top: 11% ;
}

</style>

<script>

</script>
