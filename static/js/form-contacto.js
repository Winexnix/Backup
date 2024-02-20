var comunaSelect = document.getElementById("comunaSelect");

// Agrega las comunas "Melipilla" y "Leyda"
agregarComuna("Melipilla");
agregarComuna("Leyda");

// Función para agregar una comuna al select
function agregarComuna(comuna) {
  var option = document.createElement("option");
  option.value = comuna.toLowerCase(); // Puedes usar el valor que desees
  option.text = comuna;
  comunaSelect.add(option);
}