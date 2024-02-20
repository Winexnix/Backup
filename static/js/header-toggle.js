// Función para gestionar el menú móvil
function toggleMobileMenu() {
  var mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
}

// Función para gestionar la visibilidad del menú de "Planes Hogar"
function togglePlanesHogar(showMenu) {
  var planesHogarMenu = document.getElementById("planesHogarMenu");
  planesHogarMenu.style.display = showMenu ? "block" : "none";
}

// Event listener para el clic en "planesHogarMobile"
var planesHogarMobile = document.getElementById('planesHogarMobile');
planesHogarMobile.addEventListener('click', function() {
  var planesHogarSubMenu = document.getElementById('planesHogarSubMenu');
  planesHogarSubMenu.style.display = (planesHogarSubMenu.style.display === 'none') ? 'block' : 'none';
});


// Event listener para el cambio en el tamaño de la ventana
window.addEventListener('resize', function() {
  // Obtén el ancho actual de la ventana
  var windowWidth = window.innerWidth;

  // Obtén una referencia al menú móvil
  var mobileMenu = document.getElementById('mobileMenu');

  // Si la pantalla es lo suficientemente ancha, oculta el menú móvil
  if (windowWidth >= 768) { // Puedes ajustar este valor según tus necesidades
    mobileMenu.style.display = 'none';
  }
});