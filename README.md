# 🏆 Login Screen - Tiger Tech

<div style="background: #fff; text-align: center">
  <img src="./public/images/logo-tiger-tech.png" alt="Logo Meetime" width="200">
</div>

<br>

## Requirements

1. The Facebook login button is a dummy button, with no functionality required.

2. The form should be responsive.

3. Try to use TailwindCss for the page design (if possible).

4. Focus on form management (do whatever is necessary for a good user experience).

5. Form validation:
- The "username or email" field is mandatory and must have a minimum of 6 characters and a maximum of 50 characters.
- The "password" field is mandatory and must have a minimum of 10 characters and contain at least 1 letter, 1 symbol and 1 number.
- The error/success message can appear while the user is typing (set the validation message style according to your preference).
- When submitting the form, check that the fields are valid before proceeding to Point 6.

6. When submitting, change the button icon to loader/spinner, which will return after 5 seconds.

7. All of the above must be done with a JavaScript framework of your choice.

8. The entire page must be in English. The code must also be in English, including comments

<br>


<br><hr>

## 🚀 Deploy

[![View in browser](https://img.shields.io/badge/View%20in%20Browser-ab00ff?style=for-the-badge)](https://tiger-tech.netlify.app/auth)

<br>

## 🛠️ Technologies Used

* [Angular (v19)](https://angular.io/) - Framework for building the user interface.
* [Angular Material](https://material.angular.dev/) - Angular Component Library.
* [Bootstrap](https://getbootstrap.com/) - CSS style library for easy layout and responsiveness.
* [Ngx-Toastr](https://www.npmjs.com/package/ngx-toastr) - Library for displaying notifications and visual feedback to the user.

## 📂 Project Folder Structure

```bash
├── public/            // Image and icon storage.
└── src/
    └── app/
        ├── auth/     // Authentication Components.
        ├── shared/   // Components, Enums, Services and Sharing Interfaces.
        └── app.config.ts
```
<br>

## ⚙️ How to Run the Project Locally

### ✅ Prerequisites

* [Node.js](https://nodejs.org/) (recommended LTS version)
* [Angular CLI](https://angular.io/cli) (Global Installation: `npm install -g @angular/cli`)
* [Git](https://git-scm.com/)

### 👣 Steps for Execution

1.  Clone the repository:
    ```bash
    git clone [https://github.com/Terchaki/teste-frontend-v4.git](https://github.com/Terchaki/Page-login-Tiger-Tech.git)
    ```
2.  Install the project dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    ng serve -o
    ```
    This command will build the application and automatically open it in your browser at `http://localhost:4200`.

<br>

## 🧑‍💻 Autor

* **Nome:** Lucas Henrique
* **E-mail:** lucas.dev.contato@outlook.com
* [LinkedIn](https://www.linkedin.com/in/lucas-henrique-sousa-mendes/)
