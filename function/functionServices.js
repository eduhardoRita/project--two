const iconMenu = document.querySelector(".header__icons--menu");

iconMenu.addEventListener("click", () => {
    const menu = document.querySelector(".header__menu");
    menu.classList.toggle("header__menu--show");
})

const renderComments = () => {
    const commentsContainer = document.querySelector(".main__comments");
    commentsContainer.innerHTML = "";
    const comments = getComments();
    
    comments.forEach(comment => {
        const commentElement = document.createElement("div");
        commentElement.className = "main__services--new-comment";
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
    });
};

const loadComments = () => {
    renderComments();
};

const addComment = (comment) => {
    const comments = getComments();
    comments.push(comment);
    saveComments(comments);
    renderComments();
};

const getComments = () => {
    const comments = localStorage.getItem("comments");
    return comments ? JSON.parse(comments) : [];
};

const saveComments = (comments) => {
    localStorage.setItem("comments", JSON.stringify(comments));
};

document.addEventListener("DOMContentLoaded", () => {
    const formServices = document.querySelector(".main__services--form");

    loadComments();

    formServices.addEventListener("submit", (event) => {
        event.preventDefault();
    
        let commentText = document.getElementById("main__services--comments-area").value.trim();
    
        if (commentText.trim() !== "") {
            addComment(commentText);
            document.getElementById("main__services--comments-area");
        }
    });
});

//Funciones de pagina de registro

const formRegister = document.querySelector(".main__section--register-form");

formRegister.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("user", user);
    localStorage.setItem("password", password);

    const massajeRegister = document.createElement("section"); 
    massajeRegister.textContent = "Bienvenido!  Pronto se agregaran funciones y/o promociones a usuarios registrados";
    massajeRegister.className = "main__section--register-welcome";

    const sectionRegister = document.querySelector(".main__section--register");
    sectionRegister.appendChild(massajeRegister);

    formRegister.style.display = "none";

    alert("Tus datos han sido guardados");
})
