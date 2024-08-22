document.addEventListener('DOMContentLoaded', function(){

  const botonesPrincipales = document.querySelectorAll('.btn');

  // Selecciona todos los botones con la clase .btn-items
  const botonesSecundarios = document.querySelectorAll('.btn-items');

  // Función para manejar el clic en un botón principal (.btn)
  function manejarClickPrincipal(event) {
    // Elimina la clase 'color' de todos los botones principales
    botonesPrincipales.forEach(boton => boton.classList.remove('color'));
    
    // Añade la clase 'color' al botón clicado
    event.target.classList.add('color');
  }

  // Función para manejar el clic en un botón secundario (.btn-items)
  function manejarClickSecundario(event) {
    // Elimina la clase 'color' solo de los botones secundarios
    botonesSecundarios.forEach(boton => boton.classList.remove('color'));
    
    // Añade la clase 'color' al botón clicado
    event.target.classList.add('color');
  }

  // Asigna el manejador de clic a cada botón principal
  botonesPrincipales.forEach(boton => boton.addEventListener('click', manejarClickPrincipal));

  // Asigna el manejador de clic a cada botón secundario
  botonesSecundarios.forEach(boton => boton.addEventListener('click', manejarClickSecundario));

});