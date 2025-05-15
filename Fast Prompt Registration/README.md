# 🚀 Fast Prompt Registration

## 📝 Description

This project provides a quick and easy prompt-based user registration system, designed especially for prize draws and giveaways. Built with JavaScript, HTML, and CSS, it uses modern ES6+ practices, OOP, and modular code to keep the registration process **short, straightforward, and efficient**.

---

## ⚙️ How to Use

### Clone the Repository

```bash
git clone https://github.com/yourusername/fast-prompt-registration.git
```

### Open the Project

- Open `index.html` with a local server (e.g., Live Server on VS Code).
- The main page shows a simple interface with a button to enter the prize draw.

### Start Registration

- Click the button on the main page to navigate to the registration screen.
- Follow the prompts that will ask for your full name, email, birthdate, and agreement to terms.
- If all validations pass, you will receive a unique ID confirmation.

---

## 🧩 Use Case Diagram

![Use Case Diagram](./assets/use-case-diagram.png)

---

## ✨ Features

- **Modular Design:** Clear separation of concerns with folders for classes, functions, and utilities.
- **User Class:** Encapsulates user data, generates unique IDs, and calculates age.
- **Validations:** Ensures inputs are valid, including email format and age restriction (18+).
- **Prompt-based Registration:** Quick inputs via JavaScript prompt dialogs, optimized for speed.
- **Confirmation & Agreement:** Displays confirmation message and requires acceptance of terms.
- **Simple UI:** Clean, minimal pages focusing on usability and flow.

---

## 🔧 Technologies

- JavaScript (ES6 Modules)
- HTML5 & CSS3
- Optional backend with PHP for storing registrations (future)

---

## 🔮 Future Improvements

- Add unit tests for validations.
- Implement backend integration for persistent storage.
- Improve UI with React or similar framework.
- Add graphical reports and export options.
- Add email confirmation feature.

---

## 🗂️ Folder Structure

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
    └── use-case-diagram.png # Use case diagram image
```
