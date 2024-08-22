document.addEventListener('DOMContentLoaded', function(){

  const botonPredeterminado = document.querySelector('.btn.default'); // Cambia el selector si es necesario
  const botonItemPredeterminado = document.querySelector('.btn-items.default-items'); // Opcional si tienes un item predeterminado

  // Añade la clase 'color' al botón predeterminado
  if (botonPredeterminado) {
    botonPredeterminado.classList.add('color');
  }

  if (botonItemPredeterminado) { // Si tienes un botón de item predeterminado
    botonItemPredeterminado.classList.add('color');
  }

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