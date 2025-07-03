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

- Open [`index.html`](https://github.com/apedrodev1/JavaScript-Learning-HUB/blob/main/QuickPrompt%20SignUp/index.html) with a local server (e.g., Live Server on VS Code).
- The main page shows a simple interface with a button to enter the prize draw.

</br>
</br>

## 🎯 **Start Registration**

To start the registration process for the giveaway, there are **three buttons** available on the main page that will redirect you to the registration screen [`screenGiveaway`](https://github.com/apedrodev1/JavaScript-Learning-HUB/blob/main/QuickPrompt%20SignUp/src/ux/giveaway_section/screenGiveaway.html). These buttons are intentionally placed in key sections of the website to make navigation easier for users.

> ⚠️ **Important:** The order of the images below matches the order of the buttons in the HTML structure.

---

### 🔹 **1 — Top Navigation Bar Button (Join the Giveaway)**

The first button is located in the **top-right corner of the navigation bar**. This is the most accessible option for users as it remains visible while scrolling.

- **Label:** `Join the Giveaway`
- **Location:** Header, navigation bar (top-right corner)
- **Function:** Redirects directly to the registration screen [`screenGiveaway`](hhttps://github.com/apedrodev1/JavaScript-Learning-HUB/blob/main/QuickPrompt%20SignUp/src/ux/giveaway_section/screenGiveaway.html)

<p align="center">
  <img src="./src/assets/img/README img/go_to_program.png" alt="where to click" width="400">
</p>

---

### 🔹 **2 — Hero Section Button (Join the Giveaway)**

The second button is prominently placed in the **Hero Section**, usually at the center of the main banner. This button serves as a clear call-to-action for users visiting the page.

- **Label:** `Join the Giveaway`
- **Location:** Hero Section (center of the banner)
- **Function:** Redirects directly to the registration screen [`screenGiveaway`](hhttps://github.com/apedrodev1/JavaScript-Learning-HUB/blob/main/QuickPrompt%20SignUp/src/ux/giveaway_section/screenGiveaway.html)

<p align="center">
  <img src="./src/assets/img/README img/go_to_program2.png" alt="where to click" width="400">
</p>

---

### 🔹 **3 — Carousel Button**

The third button is located within one of the **carousel slides**. This offers an additional way for users to navigate to the registration screen while browsing through the carousel content.

- **Label:** `Join the Giveaway` *(or equivalent on the slide)*
- **Location:** At the botton page. Inside the carousel (depends on the active slide)
- **Function:** Redirects directly to the registration screen [`screenGiveaway`](hhttps://github.com/apedrodev1/JavaScript-Learning-HUB/blob/main/QuickPrompt%20SignUp/src/ux/giveaway_section/screenGiveaway.html)

<p align="center">
  <img src="./src/assets/img/README img/go_to_program3 .png" alt="where to click" width="400">
</p>

---

## ✅ **Summary:**
- Any of these three buttons will take users to the **registration screen (screenTwo)**.
- The buttons are located in the **Top Navigation Bar**, **Hero Section**, and **Carousel Slide**.
- The order of the images in this README matches exactly the order in the HTML structure.


</br>

</br>

---

</br>

## 🧩 Use Case Diagram

</br>

<p align="center">
  <img src="./src/assets/img/README img/use_case_diagram.png/" alt="Use Case Diagram" width="400">
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
  <img src="./src/assets/img/README img/flow_diagram.png" alt="User Registration Flow" width="400">
</p>

</br>


---
<br>

## ⚙️ Program Flow

<br>

1. **Initial Prompt** 
- [`main_function`](https://github.com/apedrodev1/JavaScript-Learning-HUB/blob/main/QuickPrompt%20SignUp/src/js/functions/mainFunction.js#L6)
   - Displays: "Would you like to register for the prize draw?"
   - If user declines: show exit message and end program.

<br>

2. **User Data Collection** 
- [`collectUserInfo`](https://github.com/apedrodev1/JavaScript-Learning-HUB/blob/main/QuickPrompt%20SignUp/src/js/functions/mainFunction.js#L12)
   - First Name → validated with `validateName()`
   - Last Name → validated with `validateName()`
   - Birthdate → validated with `validateBirthDate()`
     - If user is underage: show message and end program.
   - Email → validated with `validateEmail()`

<br>

3. **Terms Acceptance**
- [`handleTermsAcceptance()`](https://github.com/apedrodev1/JavaScript-Learning-HUB/blob/main/QuickPrompt%20SignUp/src/js/functions/mainFunction.js#L15)

   - Opens confirmation dialog (or link to terms).
   - If user declines: a second confirmation is shown.
   - If still declined: program ends.

<br>

4. **Final Confirmation** 

- [`showConfirmationMessage(user)`](https://github.com/apedrodev1/JavaScript-Learning-HUB/blob/main/QuickPrompt%20SignUp/src/js/functions/mainFunction.js#L21)
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
- **Responsive Pages:** Focus on usability to all kinds of devices and their respectives screen sizes.
- **JSDoc Documentation:** Auto-generated technical documentation using [JSDoc](./docs/modular/index.html).

---

</br>

## 🔧 Technologies

- JavaScript (ES6 Modules),
- HTML5 & CSS3,
- BootStrap,
- Optional backend with PHP for storing registrations (future).

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
.project-root/
├── package.json                                    # Node + JSDoc project configuration
├── package-lock.json                               # Node lockfile                                   
├── README.md                                       # Main documentation (monolithic version)
├── READMEv2.md                                     # Documentation for the modular version
├── src/                                            # Comparative documentation (modular vs monolithic)
├── assets/                                         # Media folder
│   └── img/
│       ├── front_end_img/                          # UI assets and interface images
│       └── README_img/                             # Images used in documentation
├── css/                                            # Cascading Style Sheets
│   ├── style.index.css
│   ├── styleScreenConfirmating.css
│   ├── styleScreenGiveaway.css
│   └── styleScreenNotParticipating.css
├── ux/
│   └── giveaway_section/
│       ├── screenConfirmating.html                 # User lands here after confirming participation
│       ├── screenGiveaway.html                     # Entry point that runs the main function (registration flow)
│       └── screenNotParticipating.html             # User lands here after declining participation
├── docs/                                           # JSDoc auto-generated documentation
│   ├── modular/                                    # Documentation for the modular version
│   └── monolithic/                                 # Documentation for the monolithic version
├── php/
│   ├── database/
│   │   └── users.sql                               # SQL script to set up the user table
│   ├── register.php                                # PHP API endpoint to store user data in the database
│   ├── env.                                        # Environment configuration (e.g., credentials)
│   └── db.php                                      # Database connection configuration
├── js/
│   ├── classes/
│   │   └── User.js                                 # User class (ID generation, age calculation, data encapsulation)
│   ├── data/
│   │   └── user.json                               # Temporary mock database (JSON)
│   ├── functions/                                  # Main functions for both modular and monolithic flows
│   │   ├── mainFunction.js                          # Modular version of the main registration flow
│   │   ├── mainFunctionV2.js                        # Monolithic version of the main registration flow
│   │   ├── flow/                                    # Modular flow steps
│   │   │   ├── collectUserInfo.js                   # Collects user data (name, email, birth date)
│   │   │   ├── confirmation.js                      # Displays the confirmation message
│   │   │   └── getStart.js                          # Asks the user whether they want to start
│   │   ├── terms/                                   # Terms acceptance logic
│   │   │   ├── handleTerms.js                       # Handles terms acceptance flow
│   │   │   └── termsAndConditions.html              # Static page for terms and conditions
│   │   ├── utils/                                   # Utilities specific to the modular function
│   │   │   ├── validations.js                       # Input validation (name, email, birth date)
│   │   │   └── helpers.js                           # Helper functions (e.g., capitalize names)
│   ├── utils/                                       # Global or visual utilities
│   │   └── chronometer.js                           # Countdown timer used in UI pages (Confirmating, NotParticipating)
└── index.html                                       # Main landing page with the registration button


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


