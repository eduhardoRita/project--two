const handleMenu = () => {
    const iconoMenu = document.querySelector(".hdr__icn--menu");
    if (iconoMenu) {
        iconoMenu.addEventListener("click", () => {
            const menu = document.querySelector(".hdr__sec--menu");
            menu.classList.toggle("hdr__menu--show");
        });
    }

    const closeMenu = document.querySelector(".hdr__menu--icn-cls");

    closeMenu.addEventListener("click", () => {
        const menu = document.querySelector(".hdr__sec--menu"); 
        menu.classList.toggle("hdr__menu--show");
    })  
};

const renderComments = () => {
    const commmentsContainer = document.querySelector(".main__com--box-div");
    if(commmentsContainer) {
        commmentsContainer.innerHTML ="";
        const comments = getComments();

        comments.forEach(comment => {
            const commentElement = document.createElement("div");
            commentElement.className = "main__services--new-comment";
            const linkRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
            const commentsWithLink = comment.replace(linkRegex, (match) => {
                return `<a href="${match}" rel="ugc">${match}</a>`;
            });

            commentElement.innerHTML = commentsWithLink;
            commmentsContainer.appendChild(commentElement);
        });
    }
};

const getComments = () => JSON.parse(localStorage.getItem("comments")) || [];

const saveComments = ( comments ) => {
    localStorage.setItem("comments", JSON.stringify( comments ));
};

const addComment = (comment) => {
    const comments = getComments();
    comments.push(comment);
    saveComments(comments);
    renderComments();
};

const handleComments = () => {
    const formServices = document.querySelector(".main__ser--frm");
    if(formServices) {
        renderComments();
        formServices.addEventListener("submit", ( e ) => {
            e.preventDefault();

            const commentText = document.getElementById("main__ser--com-ar").value.trim();
            if(commentText) {
                addComment(commentText);
                document.getElementById("main__ser--com-ar").value = "";
            }
        });
    }
};

const handleRegister = () => {
    const formRegister = document.querySelector(".main__sec--rgtr-frm");
    if(formRegister) {
        formRegister.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const age = document.getElementById("age").value;
            const email = document.getElemnetById("email").value;
            const phone = document.getElementById("phone").value;
            const user = document.getElementById("user").value;
            const password = document.getElementById("password").value;

            localStorage.setItem("name", name);
            localStorage.setItem("age", age);
            localStorage.setItem("email", email);
            localStorage.setItem("phone", phone);
            localStorage.setItem("user", user);
            localStorage.setItem("password", password);

            const welcomeMessage = document.createElement("section");
            welcomeMessage.textContent = "Bienvenido! Pronto se agregarán funciones y/o promociones a usuarios registrados.";
            welcomeMessage.className = document.querySelector(".main__sec--rgtr");
            sectionRegister.appendChild(welcomeMessage);
            formRegister.style.display = "none";

            alert("Tus datos han sido guardados");
        });
    }
};

const handleAttentionLink = () => {
    const attention = document.getElementById("attention-link");

    if(attention) {
        attention.addEventListener("click",() => {
            window.open("https://wa.me/524426587901?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20el%20servicio%20de%20afinaci%C3%B3n", "_blank");
        });
    }     
};

const handleWhatsAppButtons = () => {
    const whatsAppButtons = document.querySelectorAll(".main__ser--pck-btn");

    whatsAppButtons.forEach(button => {
        button.addEventListener("click", () => {
            window.open("https://wa.me/524426587901?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20el%20servicio%20de%20afinaci%C3%B3n", "_blank")
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    handleMenu();
    handleComments();
    handleRegister();
    handleAttentionLink()
    handleWhatsAppButtons()
});

