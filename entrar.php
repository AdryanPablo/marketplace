<?php

require_once "./conexao.php";

session_start();

$email = $_POST["email"];
$senha = md5($_POST["senha"]);

if (empty($email) || empty($senha)) {

    header("Location: index.php");
    exit();

} else {

    $_SESSION['email'];
    header("Location: index.php");
    exit;

}