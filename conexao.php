<?php

$servidor = "localhost";
$usuario = "root";
$senha = "";

$bancoDeDados = "cadastro";
$conexao = mysqli_connect($servidor, $usuario, $senha, $bancoDeDados);

if (!$conexao) {

    die("Erro: " . mysqli_connect_error());

}