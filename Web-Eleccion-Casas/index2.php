<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Resumen de las Características de la Vivienda</title>
    <link rel="stylesheet" type="text/css" href="css/estilo2.css">
</head>
<body>
    <h1>Información Recibida Correctamente</h1>
    <p>&#128077<p>
    <h3>*Resumen de las Características de la Vivienda</h3>
    <div id="salida" onclick="calcular()">
    <?php
        $precioMetro = $_GET['preciometro'];
        $tiposTamaños = $_GET['tamaño'];
        $elementosExtra = $_GET['extra'];
        $ciudad;

        if($precioMetro == "23"){
            $ciudad="Valencia";
        }elseif($precioMetro == "25"){
            $ciudad="Madrid";
        }elseif($precioMetro == "30"){
            $ciudad="Barcelona";
        }else{
            $ciudad="Sevilla";
        }

        echo "El Precio por Metro de la Vivienda en ",$ciudad," es ",$precioMetro,"€","<br>","<br>";
        echo "El Tamaño y la Cantidad de Dormitorios de la Vivienda es de ",$tiposTamaños,"<br>","<br>";
        echo $elementosExtra;
    ?>
    </div>
</body>
</html>