# TO DO LIST - Projeto.

## Descrição:

Este projeto é uma aplicação web simples de lista de tarefas (TO DO List), desenvolvida para prática e aprendizado de tecnologias como PHP, JavaScript, e CSS. Ele implementa um sistema CRUD completo (Create, Read, Update e Delete), permitindo que o usuário:

- Adicione novas tarefas.
- Visualize a lista de tarefas existentes.
- Atualize o status de conclusão ou a descrição de uma tarefa.
- Exclua tarefas concluídas ou desnecessárias.
- O objetivo principal do projeto é aprender a integrar o frontend com o backend, aplicando manipulações de DOM, requisições AJAX e interações com um banco de dados MySQL.


## Layout do projeto:

![image](https://github.com/user-attachments/assets/3d80ae70-6b62-4731-a58b-587751e67572)



## Como utilizar: 
1. Clone o repositório:
   ```bash
   https://github.com/apedrodev1/JavaScript-Learning-HUB/tree/main/To%20do%20list
2. Configure o banco de dados:

- Crie uma base de dados no MySQL chamada to-do-list.
- Importe o arquivo to-do-list.sql (disponível na pasta /database) para estruturar a tabela necessária.

3. Atualize as credenciais de conexão no arquivo conn.php:
   
<code>$hostname = 'localhost';
      $database = 'to-do-list';
      $username = 'root';
      $password = ''; // Atualize caso tenha senha configurada no seu MySQL</code>


4. Abra o arquivo index.php no navegador (utilizando um servidor local como XAMPP, WAMP ou LAMP).

5. Pronto! Agora você pode começar a gerenciar suas tarefas.
<br>


## Estruturação de pastas:
![image](https://github.com/user-attachments/assets/ad40ac58-3f42-4963-b742-bb6856aa1a00)



## Linguagens usadas:

- PHP: Backend, responsável por processar as operações do CRUD e se conectar ao banco de dados.
- JavaScript (jQuery): Interações dinâmicas no frontend, como envio de formulários e atualização do DOM.
- CSS: Estilização do layout responsivo e moderno.


## CRUD:
## Create
- Adiciona novas tarefas à lista.
- Implementado em actions/create.php:

<code><?php
require_once('../database/conn.php');
$description = filter_input(INPUT_POST,  'description');
if ($description) {
    $sql = $pdo->prepare("INSERT INTO task (description) VALUES (:description)");
    $sql->bindValue(':description', $description);
    $sql->execute();
    header('Location: ../index.php');
    exit;
} else {
    header('Location: ../index.php');
    exit;
}
</code>

<br>

## Read
- Exibe todas as tarefas no frontend.
- As tarefas são carregadas a partir do banco de dados no index.php.

<br>

## Update
- Atualiza a descrição ou o status de conclusão de uma tarefa.
- Implementado em:

- Atualiza a descrição.

<code><?php
require_once('../database/conn.php');
$description = filter_input(INPUT_POST, 'description');
$id = filter_input(INPUT_POST, 'id');
if ($description && $id) {
    $sql = $pdo->prepare("UPDATE task SET description = :description WHERE id = :id");
    $sql->bindValue(':description', $description);
    $sql->bindValue(':id', $id);
    $sql->execute();
    header('Location: ../index.php');
    exit;
} else {
    header('Location: ../index.php');
    exit;
}</code>


- Atualiza o status:
<code><?php

require_once('../database/conn.php');

$id = filter_input(INPUT_POST, 'id');
$completed = filter_input(INPUT_POST, 'completed');
if ($id && $completed) {
    $sql = $pdo->prepare("UPDATE task SET completed = :completed WHERE id = :id");
    $sql->bindValue(':completed', $completed);
    $sql->bindValue(':id', $id);
    $sql->execute();
    echo json_encode(['success' => true]);
    exit;
} else {
    echo json_encode(['success' => false]);
    exit;
}
</code> 

<br>

## Delete

- Remove tarefas indesejadas.
- Implementado em actions/delete.php.

<code><?php
require_once('../database/conn.php');
$id = filter_input(INPUT_GET, 'id');
if ($id) {
    $sql = $pdo->prepare('DELETE FROM task WHERE id = :id');
    $sql->bindValue(':id', $id);
    $sql->execute();
    header('Location: ../index.php');
    exit;
} else {
    header('Location: ../index.php');
    exit;
}</code>

<br>


 ---
  
  <br>
  <p align="center">
  Esse README fornece uma descrição clara do projeto, seus objetivos, tecnologias utilizadas e como utilizá-lo, juntamente com os devidos créditos ao criador original do projeto.
</p>



