const Text = "Flappy Bird!";
let tytul = document.getElementById("tytul");
let index = 0;
function writeText(){

    tytul.innerText = text.slice(0, index);

    index++;
    if(index > text.lenght){
        index=0;
    }
}
setInterval(writeText, 100);