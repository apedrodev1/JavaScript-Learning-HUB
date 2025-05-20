<?php

$dataFile = '../data/user.json';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullName = $_POST['fullName'] ?? '';
    $email = $_POST['email'] ?? '';
    $birthDate = $_POST['birthDate'] ?? '';

    // Validações básicas
    if (strlen($fullName) < 3 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid input']);
        exit;
    }

    // Novo usuário
    $newUser = [
        'fullName' => $fullName,
        'email' => $email,
        'birthDate' => $birthDate,
        'registeredAt' => date('Y-m-d H:i:s'),
    ];

    // Carrega o conteúdo atual
    $users = [];
    if (file_exists($dataFile)) {
        $json = file_get_contents($dataFile);
        $users = json_decode($json, true) ?? [];
    }

    // Adiciona o novo usuário
    $users[] = $newUser;

    // Salva no arquivo
    file_put_contents($dataFile, json_encode($users, JSON_PRETTY_PRINT));

    echo json_encode(['success' => true, 'message' => 'User registered']);
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
