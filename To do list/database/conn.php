<?php

$hostname = 'localhost';
$database = 'to-do-list';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$hostname;dbname=$database;sslmode=disable", $username, $password);

    // Configura o modo de erro do PDO para exceções
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}
