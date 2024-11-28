<?php

$hostname = 'localhost';
$database = 'to_do_list';
$username = 'postgres';
$password = '1234';

try {
    // Adiciona sslmode=disable para desativar o SSL
    $pdo = new PDO("pgsql:host=$hostname;dbname=$database;sslmode=disable", $username, $password);

    // Configura o modo de erro do PDO para exceções
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Conexão bem-sucedida!";
} catch (PDOException $e) {
    // Exibe mensagem de erro em caso de falha na conexão
    echo "Erro: " . $e->getMessage();
}
