# 🚀 Fast Prompt Registration

</br>

## 📝 Description

This project provides a quick and easy prompt-based user registration system, designed primarily for prize draws and giveaways. It can also be adapted for newsletters and discount coupons. Built with JavaScript, HTML, and CSS, it follows modern ES6+ standards, uses Object-Oriented Programming (OOP), and applies modular code practices to keep the registration process short, straightforward, and efficient.

---

</br>

## ⚙️ How to Use

### Clone the Repository

```bash
git clone https://github.com/apedrodev1/JavaScript-Learning-HUB/tree/main/Fast%20Prompt%20Registration
```

### Open the Project

- Open `index.html` with a local server (e.g., Live Server on VS Code).
- The main page shows a simple interface with a button to enter the prize draw.

### Start Registration

- Click the button on the main page to navigate to the registration screen.

Colocar detalhamento do botao (nome, foto, localizacao na tela)

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
  <img src="./assets/img/README img/flow_diagram.png" alt="User Registration Flow" width="300">
</p>

</br>

## 🧩 Use Case Diagram

</br>

<p align="center">
  <img src="./assets/img/README img/use_case_diagram.png" alt="Use Case Diagram" width="400">
</p>

</br>

---

</br>

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
├── index.html                # Main page with prize draw button
├── registration.html         # Registration page with prompt flow
├── js/
│   ├── screenTwo.js          # Entry point for registration page
│   ├── functions/
│   │   └── main_function.js  # Main prompt registration logic
│   ├── classes/
│   │   └── User.js           # User class with ID and age methods
│   └── utils/
│       └── validations.js    # Input validation utilities
├── css/
│   └── style.css             # Styles for pages
└── assets/
    └── img                   
        └── front end img     # Image content used on front end
        └── README img        # Image content used on README.md

```
</br>

---