<?php

require_once "./conexao.php";

$email = $_POST["email"];
$senha = md5($_POST["senha"]);

if (empty($email) || empty($senha)) {

    header("Location: index.html");
    exit();

} else {

    header("Location: index.html");
    exit;

}