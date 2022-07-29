<?php

$nome = "Ádryan";
$sobrenome = "Pablo";
$email = "adryan@gmail.com";
$senha = "1234";

$dados = Array("nome" => $nome,
                 "sobrenome" => $sobrenome, 
                 "email" => $email, 
                 "senha" => $senha);

$usuario = json_encode($dados);

echo $usuario;