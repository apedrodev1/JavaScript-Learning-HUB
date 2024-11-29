# TO DO LIST - Projeto.

Sendo uma reprodução de um gerenciador de tarefas, disponível no YouTube, criado pelo canal [Larissa Kichi](https://www.youtube.com/watch?v=7KWpDC12X7U) e disponibilizado no [repositório do GitHub](https://github.com/Larissakich/to-do-list-php).

## Descrição:



## Layout do projeto:


## Como utilizar: 
1. Clone o repositório:
   ```bash
   https://github.com/apedrodev1/JavaScript-Learning-HUB/tree/main/To%20do%20list
2. Abra o arquivo `index.php` ...,
<br/>

3. Se divirta!

</br>


## Estruturação de pastas:
![image](https://github.com/user-attachments/assets/ad40ac58-3f42-4963-b742-bb6856aa1a00)




## Linguagens usadas:
- PHP,
- JS,
- CSS


## CRUD:
- Create:
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
}</code>
</br>

- Delete:
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
</br>
- Update:
  <code> </code>
  </br>
- Update-progress:
 <code> </code>




 ---
  
  <br>
  <p align="center">
  Esse README fornece uma descrição clara do projeto, seus objetivos, tecnologias utilizadas e como utilizá-lo, juntamente com os devidos créditos ao criador original do projeto.
</p>

