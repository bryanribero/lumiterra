document.addEventListener('DOMContentLoaded', function(){

  const botones = document.querySelectorAll('.btn');

  // Función para manejar el clic en un botón
  function manejarClick(event) {
    // Elimina la clase 'active' de todos los botones
    botones.forEach(boton => boton.classList.remove('color'));
    
    // Añade la clase 'active' al botón clicado
    event.target.classList.add('color');
  }
  
  // Asigna el manejador de clic a cada botón
  botones.forEach(boton => boton.addEventListener('click', manejarClick));

});