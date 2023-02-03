




let LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ*!";
document.querySelector("h1").onmouseover = Event => {
    let interations = 0;
    const interval = setInterval(() => {
        Event.target.innerText = Event.target.innerText.split("").map((letter, index) => {
            if (index < interations) {
                return Event.target.dataset.value[index];
            }
            return LETTERS[Math.floor(Math.random() * 28)]
        }).join("");
        if (interations >= Event.target.dataset.value.length) {
            clearInterval(interval);
        }
        interations+=1/3;
    }, 40)
};


 LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ*!";
document.querySelector("h").onmouseover = Event => {
    let interations = 0;
    const interval = setInterval(() => {
        Event.target.innerText = Event.target.innerText.split("").map((letter, index) => {
            if (index < interations) {
                return Event.target.dataset.value[index];
            }
            return LETTERS[Math.floor(Math.random() * 28)]
        }).join("");
        if (interations >= Event.target.dataset.value.length) {
            clearInterval(interval);
        }
        interations+=1/3;
    }, 40)
};

