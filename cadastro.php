<?php

require_once "./conexao.php";

$nome = $_POST["nome"];
$sobrenome = $_POST["sobrenome"];
$email = $_POST["email"];
$senha = md5($_POST["senha"]);

$query = "INSERT INTO usuarios(nome, sobrenome, email, senha) VALUES('$nome', '$sobrenome', '$email', '$senha')";

if (mysqli_query($conexao, $query)) {

    header("Location: index.html");

} else {

    header("Location: index.html");

}

mysqli_close($conexao);