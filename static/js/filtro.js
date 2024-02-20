// Función para obtener el valor del parámetro de consulta 'opcion'

function getQueryParam(param) {

    const urlParams = new URLSearchParams(window.location.search);

    return urlParams.get(param);

}

document.addEventListener("DOMContentLoaded", function () {
    var opcionSeleccionada = getQueryParam('opc');

    var internet1 = document.getElementById('internet1');

    var internet2 = document.getElementById('internet2');

    var tv1 = document.getElementById('tv1');

    var tv2 = document.getElementById('tv2');

    var tex1 = document.getElementById('meli');

    var tex2 = document.getElementById('ley');

    var checkboxToggle = document.getElementById("checkbox_toggle");




    // Mostrar los campos según la opción seleccionada

    if (opcionSeleccionada === 'mel') {

        tex1.style.display = "block";

        tex2.style.display = "none";

        tv2.style.display = "none";

        internet2.style.display = "none"

        tv1.style.display = "none";

        internet1.style.display = "block";





        // Agregar un event listener al checkbox
        checkboxToggle.addEventListener("change", function () {
            if (checkboxToggle.checked) {
                tv1.style.display = "block";
                internet1.style.display = "none";
            } else {
                tv1.style.display = "none";
                internet1.style.display = "block";
            }
        });



    } else if (opcionSeleccionada === 'ley') {

        tex2.style.display = "block";

        tex1.style.display = "none";

        tv1.style.display = "none";

        internet1.style.display = "none"

        tv2.style.display = "none";

        internet2.style.display = "block";


        // Agregar un event listener al checkbox
        checkboxToggle.addEventListener("change", function () {
            if (checkboxToggle.checked) {
                tv2.style.display = "block";
                internet2.style.display = "none";
            } else {
                tv2.style.display = "none";
                internet2.style.display = "block";
            }
        });

    }
});

