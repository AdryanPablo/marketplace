<?php

require_once "./conexao.php";

$nome = $_POST["nome"];
$sobrenome = $_POST["sobrenome"];
$email = $_POST["email"];
$senha = md5($_POST["senha"]);

$query = "INSERT INTO usuarios(nome, sobrenome, email, senha) VALUES('$nome', '$sobrenome', '$email', '$senha')";

if (mysqli_query($conexao, $query)) {

    echo "Usuário cadastrado com sucesso.";

} else {

    echo "Erro ao tentar cadastrar usuário.";

}

mysqli_close($conexao);