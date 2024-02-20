<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Obtener la respuesta del reCAPTCHA

    $captchaResponse = $_POST['g-recaptcha-response'];



    // Verificar el reCAPTCHA

    $secretKey = "";

    $userIP = $_SERVER['REMOTE_ADDR'];

    $url = "https://www.google.com/recaptcha/api/siteverify";



    $data = array(

        'secret' => $secretKey,

        'response' => $captchaResponse,

        'remoteip' => $userIP

    );



    $options = array(

        'http' => array(

            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",

            'method'  => 'POST',

            'content' => http_build_query($data)

        )

    );



    $context  = stream_context_create($options);

    $response = file_get_contents($url, false, $context);



    // Parsear la respuesta JSON

    $responseData = json_decode($response, true);



    if ($responseData['success'] == true) {

        // Recopilar datos del formulario

        $nombre = $_POST['nombre'];

        $correo = $_POST['correo'];

        $telefono = $_POST['telefono'];

        $direccion = $_POST['direccion'];

        $comuna = $_POST['comuna'];

        $servicio = $_POST['servicio'];

        $conocer = $_POST['conocer'];

        $mensaje = $_POST['mensaje'];



        // Configurar destinatario y asunto del correo

        $to = "soporte@melinet.cl";

        $subject = "Nuevo mensaje de contacto";



        // Construir el cuerpo del correo

        $message = "Nombre: $nombre\nCorreo: $correo\nTelefono: $telefono\nDireccion: $direccion\nComuna: $comuna\nTipo de Servicio: $servicio\nComo conocio Melinet?: $conocer\nMensaje: $mensaje";

        $headers = "From: soporte@melinet.cl";



        // Enviar el correo electrónico

        if (mail($to, $subject, $message, $headers)) {

            header("Location: https://melinet.cl/exito.html");

        } else {

            header("Location: https://melinet.cl/error.html");

        }

     

    } else {

        // El reCAPTCHA no fue validado correctamente

        echo "Error: reCAPTCHA no validado.";

    }

}

?>

