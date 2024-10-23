const movetelaid = document.getElementById("movetelaid");

function esquerda(){
    movetelaid.scrollBy({
        left: -100, 
        behavior: 'smooth'  
    });
}
function direita(){
    movetelaid.scrollBy({
        left: 100, 
        behavior: 'smooth' 
    });
}



const btfaq = document.querySelectorAll(".btfaque");
const perguntafaque = document.querySelectorAll(".perguntafaque");

btfaq.forEach((botao, index) => {
    botao.addEventListener("click", function() {
        perguntafaque[index].classList.toggle("perguntafaqueactive");
    });
});
