document.addEventListener("DOMContentLoaded", () => {
    const iconMenu = document.querySelector(".hdr__icn--menu");

    iconMenu.addEventListener("click", () => {
        const menu = document.querySelector(".hdr__sec--menu");
        menu.classList.toggle("hdr__menu--show");
    })

    const closeMenu = document.querySelector(".hdr__menu--icn-cls");

    closeMenu.addEventListener("click", () => {
        const menu = document.querySelector(".hdr__sec--menu"); 
        menu.classList.toggle("hdr__menu--show");
    })

    const buttonWelcome = document.querySelector(".main__sec-wel--btn");
    const welcome = document.querySelector(".main__sec-welcome");

    const inicialState = () => {
        if (buttonWelcome === "Ocultar") {
            welcome.style.overflow = "visible";
            welcome.style.height = "auto";
        } else {
            welcome.style.overflow = "hidden";
            welcome.style.height = "180px";
            buttonWelcome.textContent = "Ver mas...";
        }
    };

    inicialState();

    buttonWelcome.addEventListener("click", () => {
        if (buttonWelcome.textContent === "Ver mas...") {
            welcome.style.overflow = "visible";
            welcome.style.height = "auto";
            buttonWelcome.textContent = "Ocultar";
        } else {
            welcome.style.overflow = "hidden";
            welcome.style.height = "180px";
            buttonWelcome.textContent = "Ver mas...";
        }
    });

    const form = document.querySelector(".main__sec-chk--frm");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const lastMileage = document.getElementById("value-one").value;
        let numberLastMileage = parseFloat(lastMileage);
        const currentMileage = document.getElementById("value-two").value;
        let numberCurrentMileage = parseFloat(currentMileage);
        const valueSelect = document.getElementById("select-value").value;
        const submit = document.querySelector(".main__div-chk--sum");
        const fieldset = document.querySelector(".main__sec-chk--fset");
    
        if (valueSelect === "normal") {
            numberLastMileage += 5000;
           
            if (numberCurrentMileage > numberLastMileage) {
                let residueMileage = numberCurrentMileage - numberLastMileage;
                const answerBox = document.createElement("div");
                answerBox.className = "main__chk--answ-box";
                answerBox.textContent = "¡Necesitas servicio, te has pasado con " + residueMileage + " kilometros!";
                fieldset.appendChild(answerBox);
                submit.style.display = "none";
            } else {
                let residueMileageTwo = numberLastMileage - numberCurrentMileage;
                const answerBoxTwo = document.createElement("div");
                answerBoxTwo.className = "main__chk--answ-box-two";
                answerBoxTwo.textContent = "Tu auto esta en optimas condiciones, te hacen faltan " + residueMileageTwo + " kilometros por recorrer para tu proximo servicio";
                fieldset.appendChild(answerBoxTwo);
                submit.style.display = "none";
            }
        } else {
            numberLastMileage += 10000;
            
            if (numberCurrentMileage > numberLastMileage) {
                let residueMileageThree = numberCurrentMileage - numberLastMileage;
                const answerBoxThree = document.createElement("div");
                answerBoxThree.className = "main__chk--answ-box-thr";
                answerBoxThree.textContent = "Necesitas servicio, te has pasado con " + residueMileageThree + " kilometros";
                fieldset.appendChild(answerBoxThree);
                submit.style.display = "none";
            } else {
                let residueMileageFour = numberLastMileage - numberCurrentMileage;
                const answerBoxFour = document.createElement("div");
                answerBoxFour.className = "main__chk--answ-box-fr";
                answerBoxFour.textContent = "Tu auto esta en optimas condiciones, te hacen falta " + residueMileageFour + " kilometros por recorrer";
                fieldset.appendChild(answerBoxFour);    
                submit.style.display = "none";
            }
        }
    });

    const handleAttentionLink = () => {
        const attention = document.getElementById("attention-link");
    
        if(attention) {
            attention.addEventListener("click",() => {
                window.open("https://wa.me/524426587901?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20el%20servicio%20de%20afinaci%C3%B3n", "_blank");
            });
        }     
    };

    handleAttentionLink();

    const handleWhatsAppButtons = () => {
        const whatsAppButtons = document.querySelectorAll(".whatsapp-button");
    
        whatsAppButtons.forEach(button => {
            button.addEventListener("click", () => {
                window.open("https://wa.me/524426587901?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20el%20servicio%20de%20afinaci%C3%B3n", "_blank")
            });
        });
    };
    
    handleWhatsAppButtons();
});