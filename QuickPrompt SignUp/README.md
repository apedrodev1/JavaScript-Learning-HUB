# 🚀 QuickPrompt SignUp 

</br>

## 📝 Description

This project provides a quick and easy prompt-based user registration system, designed primarily for prize draws and giveaways. It can also be adapted for newsletters and discount coupons. Built with JavaScript, HTML, and CSS, it follows modern ES6+ standards, uses Object-Oriented Programming (OOP), and applies modular code practices to keep the registration process short, straightforward, and Sefficient.

---

</br>

## ⚙️ How to Use

</br>

### Clone the Repository


```bash

git clone https://github.com/apedrodev1/JavaScript-Learning-HUB/blob/main/QuickPrompt%20SignUp

```
</br>

## 📖 Code-Level Documentation — JSDoc

This project follows the [JSDoc](https://jsdoc.app/) standard for in-code documentation.

To generate automatic documentation:

```bash
npm install -g jsdoc
jsdoc ./js/functions/mainFunction.js -d docs
jsdoc ./js/functions/mainFunctionV2.js -d docs
```
This generates HTML docs inside the docs/ folder for easy navigation.

</br>

### Open the Project

- Open `index.html` with a local server (e.g., Live Server on VS Code).
- The main page shows a simple interface with a button to enter the prize draw.

</br>
</br>

### Start Registration

- On the main page click the button above to navigate to the registration screen.

<p align="center">
  <img src="./assets/img/README img/go_to_program.png" alt="where to click" width="400">
</p>


<p align="center">
  <img src="./assets/img/README img/go_to_program2.png" alt="where to click" width="400">
</p>


<p align="center">
  <img src="./assets/img/README img/go_to_program3.png" alt="where to click" width="400">
</p>



</br>

</br>

---

</br>

## 🧩 Use Case Diagram

</br>

<p align="center">
  <img src="./assets/img/README img/use_case_diagram.png" alt="Use Case Diagram" width="400">
</p>

</br>

---


</br>

## 🔄 User Registration Flow

The following flowchart describes the registration steps:

1. User enters their **first name**.

2. Then enters **last name**.

3. System asks for **birth date** and checks if the user is at least 18.
   - If **underage**, a message is shown and the process ends.

4. If eligible, the user provides an **email**.

5. The system asks for **acceptance of terms**.
   - If not accepted, a message is shown and the process ends.

6. If accepted, a **confirmation message** is displayed.

</br>
</br>

<p align="center">
  <img src="./assets/img/README img/flow_diagram.png" alt="User Registration Flow" width="400">
</p>

</br>


---
<br>

## ⚙️ Program Flow

<br>

1. **Initial Prompt** 
- [`main_function`](https://github.com/apedrodev1/JavaScript-Learning-HUB/blob/main/QuickPrompt%20SignUp/js/functions/mainFunction.js#L6)
   - Displays: "Would you like to register for the prize draw?"
   - If user declines: show exit message and end program.

<br>

2. **User Data Collection** 
- [`collectUserInfo`](https://github.com/apedrodev1/JavaScript-Learning-HUB/blob/main/QuickPrompt%20SignUp/js/functions/mainFunction.js#L12)
   - First Name → validated with `validateName()`
   - Last Name → validated with `validateName()`
   - Birthdate → validated with `validateBirthDate()`
     - If user is underage: show message and end program.
   - Email → validated with `validateEmail()`

<br>

3. **Terms Acceptance**
- [`handleTermsAcceptance()`](https://github.com/apedrodev1/JavaScript-Learning-HUB/blob/main/QuickPrompt%20SignUp/js/functions/mainFunction.js#L15)

   - Opens confirmation dialog (or link to terms).
   - If user declines: a second confirmation is shown.
   - If still declined: program ends.

<br>

4. **Final Confirmation** 

- [`showConfirmationMessage(user)`](https://github.com/apedrodev1/JavaScript-Learning-HUB/blob/main/QuickPrompt%20SignUp/js/functions/mainFunction.js#L21)
   - Displays:
     - Full name
     - Generated lucky number (user ID)
     - Registered email for future contact


<br>

--- 

## UML Diagram

</br>

```
+------------------------------+
|           User              |
+------------------------------+
| - id: string                |
| - firstName: string         |
| - lastName: string          |
| - email: string             |
| - birthDate: Date           |
+------------------------------+
| + constructor(firstName, lastName, email, birthDate) |
| + generateID(): string                             |
| + getAge(): number                                 |
| + isAdult(): boolean                               |
| + getFullName(): string                            |
+------------------------------+

```
---

</br>

## ✨ Features

- **Modular Design:** Clear separation of concerns with folders for classes, functions, and utilities.
- **User Class:** Encapsulates user data, generates unique IDs, and calculates age.
- **Validations:** Ensures inputs are valid, including email format and age restriction (18+).
- **Prompt-based Registration:** Quick inputs via JavaScript prompt dialogs, optimized for speed.
- **Confirmation & Agreement:** Displays confirmation message and requires acceptance of terms.
- **Simple UI:** Clean, minimal pages focusing on usability and flow.
- **JSDoc Documentation:** Auto-generated technical documentation using [JSDoc](./docs/modular/index.html).

---

</br>

## 🔧 Technologies

- JavaScript (ES6 Modules)
- HTML5 & CSS3
- Optional backend with PHP for storing registrations (future)

---

</br>

## 🔮 Future Improvements

- Add unit tests for validations.
- Implement backend integration for persistent storage.
- Improve UI with React or similar framework.
- Add graphical reports and export options.
- Add email confirmation feature.

---

</br>

## 🗂️ Folder Structure

</br>


```
project-root/
├── index.html                         # Página principal com botão de inscrição
├── screenTwo.js                       # Entry point que executa a função principal
├── package.json                       # Configuração do projeto Node + JSDoc
├── package-lock.json                  # Lockfile do Node
├── README.md                          # Documentação principal (monolítica)
├── READMEv2.md                        # Documentação comparativa modular vs monolítica
├── docs/                              # Documentação JSDoc
│   ├── modular/                       # Documentação da versão modular
│   └── monolithic/                    # Documentação da versão monolítica
├── php/
│   └── register.php                   # Endpoint PHP para armazenar os dados
├── js/
│   ├── classes/
│   │   └── User.js                    # Classe User: ID, idade, encapsulamento de dados
│   ├── data/
│   │   └── user.json                  # Armazenamento temporário (mock)
│   ├── functions/
│   │   ├── mainFunction.js           # Versão modular do fluxo principal
│   │   ├── mainFunctionV2.js         # Versão monolítica do fluxo principal
│   │   ├── flow/
│   │   │   ├── collectUserInfo.js    # Coleta de dados via prompt
│   │   │   ├── confirmation.js       # Mensagem final de confirmação
│   │   │   └── getStart.js           # Confirmação inicial de participação
│   │   ├── terms/
│   │   │   ├── handleTerms.js        # Lógica de aceite dos termos
│   │   │   └── termsAndConditions.html # Página com os termos exibidos ao usuário
│   ├── utils/
│   │   ├── validations.js            # Funções de validação de entrada
│   │   └── helpers.js                # Funções utilitárias auxiliares
└── node_modules/                     # Dependências do Node.js


```
</br>

--- 
</br>


## 🆚 V2 Version – Refactored Flow


</br>

Take a look at [Version 2](https://github.com/apedrodev1/JavaScript-Learning-HUB/blob/main/QuickPrompt%20SignUp/READMEV2.md). — a more compact and streamlined approach using centralized validation. While V1 focuses on modularity, V2 simplifies the flow for better use in small projects like this one.


</br>

## 🎉 Thanks for checking out!

</br>

Feel free to open issues or contribute.


