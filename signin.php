<?php

require_once "./contection.php";

session_start();

$email = $_POST["email"];
$password = md5($_POST["password"]);

if (empty($email) || empty($password)) {

    header("Location: index.php");
    exit();

} else {

    $_SESSION['email'];
    header("Location: index.php");
    exit;

}