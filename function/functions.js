const iconMenu = document.querySelector(".header__icons--menu");

iconMenu.addEventListener("click", () => {
    const menu = document.querySelector(".header__menu");
    menu.classList.toggle("header__menu--show");
})


const buttonWelcome = document.querySelector(".main__welcome--button");
const welcome = document.querySelector(".main__welcome");

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
})

const form = document.querySelector(".main__check--form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const lastMileage = document.getElementById("value-one").value;
    let numberLastMileage = parseFloat(lastMileage);
    const currentMileage = document.getElementById("value-two").value;
    let numberCurrentMileage = parseFloat(currentMileage);
    const valueSelect = document.getElementById("select-value").value;
    const submit = document.querySelector(".main__check--sumbit");
    const fieldset = document.querySelector(".main__check--fieldset");

    if (valueSelect === "normal") {
        numberLastMileage += 5000;
       
        if (numberCurrentMileage > numberLastMileage) {
            let residueMileage = numberCurrentMileage - numberLastMileage;
            const answerBox = document.createElement("div");
            answerBox.className = "main__check--answer-box";
            answerBox.textContent = "¡Necesitas servicio, te has pasado con " + residueMileage + " kilometros!";
            const newButton = document.createElement("button");
            newButton.className = "main__check--new-button";
            newButton.textContent = "Agendar cita";
            answerBox.appendChild(newButton);
            fieldset.appendChild(answerBox);
            submit.style.display = "none";
        } else {
            let residueMileageTwo = numberLastMileage - numberCurrentMileage;
            const answerBoxTwo = document.createElement("div");
            answerBoxTwo.className = "main__check--answer-box-two";
            answerBoxTwo.textContent = "Tu auto esta en optimas condiciones, te hacen faltan " + residueMileageTwo + " kilometros por recorrer para tu proximo servicio";
            fieldset.appendChild(answerBoxTwo);
            submit.style.display = "none";
        }
    } else {
        numberLastMileage += 10000;
        
        if (numberCurrentMileage > numberLastMileage) {
            let residueMileageThree = numberCurrentMileage - numberLastMileage;
            const answerBoxThree = document.createElement("div");
            answerBoxThree.className = "main__check--answer-box-three";
            answerBoxThree.textContent = "Necesitas servicio, te has pasado con " + residueMileageThree + " kilometros";
            const newButtonTwo = document.createElement("button");
            newButtonTwo.className = "main__check--new-button-two";
            newButtonTwo.textContent = "Agendar cita";
            answerBoxThree.appendChild(newButtonTwo);
            fieldset.appendChild(answerBoxThree);
            submit.style.display = "none";
        } else {
            let residueMileageFour = numberLastMileage - numberCurrentMileage;
            const answerBoxFour = document.createElement("div");
            answerBoxFour.className = "main__check--answer-box-four";
            answerBoxFour.textContent = "Tu auto esta en optimas condiciones, te hacen falta " + residueMileageFour + " kilometros por recorrer";
            fieldset.appendChild(answerBoxFour);
            submit.style.display = "none";
        }
    }
})

