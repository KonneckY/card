const element = document.querySelector(".bird-img");

const cardB = document.querySelector(".cardB");
const btn_close = document.querySelector(".zamknij");
const btn_open = document.querySelector(".btn");

btn_open.addEventListener('click', function(){
    cardB.style.display = "grid";
});
btn_close.addEventListener('click', function(){
    cardB.style.display = "none";
});

setInterval(() => {
    element.style.setProperty("--ml", Math.random() * 200 + "px");
}, 300)