const element = document.querySelector(".bird-img");

setInterval(() => {
    element.style.setProperty("--ml", Math.random() * 300 + "px");
}, 300)