<?php

$servidor = "localhost";
$usuario = "root";
$senha = "";
$bancoDeDados = "marketplace";

$conexao = mysqli_connect($servidor, $usuario, $senha, $bancoDeDados);

if (!$conexao) {

    die("Erro: " . mysqli_connect_error());

}