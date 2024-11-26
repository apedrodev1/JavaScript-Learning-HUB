<?php

$hostname = 'localhost';
$database = 'to_do_list';
$username = 'postgres';
$password = '1234';


try{
    $pdo = new PDO("psgl:host $hostname, 
    dbname = $database,
    username = $username,
    password = $password ");

} catch (PDOException $e) {
    echo "Erro: ". $e->getMessage();
}
