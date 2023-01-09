<?php

$server = "localhost";
$user = "root";
$password = "";
$dataBase = "marketplace";

$conection = mysqli_connect($server, $user, $password, $dataBase);

if (!$conection) {

    die("Error: " . mysqli_connect_error());

}