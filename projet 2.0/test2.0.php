<?php

mysql_connect("localhost","root","");
mysql_select_db("classe");

$nom = $_POST["nom"];
$prenom = $_POST["prenom"];
$moyenne = $_POST["moyenne"];
$numero = $_POST["numero"];


$rq = "INSERT INTO eleves VALUES ('$nom','$prenom','$moyenne','$numero');";
$res = mysql_query($rq);

?>