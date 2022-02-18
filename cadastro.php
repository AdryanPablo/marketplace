<?php

include_once "./conexao.php";

if (empty($_POST["nome"] || empty($_POST["sobrenome"]) || empty($_POST["email"]) || empty($_POST["senha"]))) {

    echo "Preencha todos os dados.";
    header("Location: index.php");

    exit();

} else {

    $nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $email = $_POST["email"];
    $senha = md5($_POST["senha"]);

    $sql = "INSERT INTO usuarios(nome, sobrenome, email, senha) VALUES('$nome', '$sobrenome', '$email', '$senha')";

    if (mysqli_query($conexao, $sql)) {

        echo "Usuário cadastrado com sucesso.";

    } else {

        echo "Erro ao tentar cadastrar usuário.";

    }

    mysqli_close($conexao);

}