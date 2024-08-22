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

  //------------------------------------------------------------------------------

  function showSection(section) {
    // Ocultar todas las secciones principales
    document.querySelectorAll('.section').forEach(sec => {
      sec.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    document.getElementById(section).style.display = 'block';

    // Actualizar el estado activo de los botones
    document.querySelectorAll('.btn').forEach(btn => {
      btn.classList.remove('default');
    });
    document.querySelector(`button[onclick="showSection('${section}')"]`).classList.add('default');

    // Si se está mostrando 'items', mostrar contenido específico
    if (section === 'items') {
      document.querySelector('.items-content').style.display = 'block';
    } else {
      document.querySelector('.items-content').style.display = 'none';
    }
  }

  // Función para mostrar el contenido específico dentro de 'items'
  function showSubSection(subSection) {
    const itemsContent = document.querySelector('.items-content');

    // Ocultar todas las sub-secciones
    itemsContent.querySelectorAll('.sub-section').forEach(section => {
      section.style.display = 'none';
    });

    // Mostrar la sub-sección seleccionada
    document.getElementById(subSection).style.display = 'block';

    // Actualizar el estado activo de los botones
    document.querySelectorAll('.btn-items').forEach(btn => {
      btn.classList.remove('default-items');
    });
    document.querySelector(`button[onclick="showSubSection('${subSection}')"]`).classList.add('default-items');
  }

  // Asignar los eventos de clic a los botones
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
      showSection(btn.getAttribute('onclick').split("'")[1]);
    });
  });

  document.querySelectorAll('.btn-items').forEach(btn => {
    btn.addEventListener('click', function() {
      showSubSection(btn.getAttribute('onclick').split("'")[1]);
    });
  });

  // Inicialmente mostrar la sección 'items' por defecto
  showSection('items');
});

