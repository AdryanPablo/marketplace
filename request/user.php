<?php

$name = "Ádryan";
$lastname = "Pablo";
$email = "adryan@gmail.com";
$password = "1234";

$data = Array("name" => $name,
              "lastname" => $lastname, 
              "email" => $email, 
              "password" => $password);

$user = json_encode($data);

echo $user;