<?php

require_once "./conection.php";

$name = $_POST["name"];
$lastname = $_POST["lastname"];
$email = $_POST["email"];
$password = md5($_POST["password"]);

if (empty($name) || empty($lastname) || empty($email) || empty($password)) {

    header("Location: index.php");
    exit();

} else {

    $query = "INSERT INTO usuarios(name, lastname, email, password) VALUES('$name', '$lastname', '$email', '$password')";

    if (mysqli_query($conection, $query)) {

        header("Location: index.php");

    } else {

        header("Location: index.php");

    }

    mysqli_close($conection);

}