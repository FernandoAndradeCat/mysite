let show = true;
let showModal = false;
const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelector(".menu-toggle");
const burguer = document.querySelector(".burguer");
const aboutM = document.querySelector('.about');
const homeM = document.querySelector('.home');


function acao(get){

    document.body.style.overflow = showModal ? "hidden" : "initial";
    
    let modal = document.querySelector('.modal-main');
    
    if(showModal){
        modal.style.display = 'block';
    }
    else{
        modal.style.display = 'none';
    }

    showModal = !showModal;

    switch(get){
        case'il':
        document.getElementById(".msg").innerHTML="Habilidade com Illustrator";
        break;
        
        default:
            document.getElementById(".msg").innerHTML="Não foi possível carregar as informações desta habilidade.";
            break;
    }
}


burguer.addEventListener('click', () => {


})

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial";

    menuSection.classList.toggle("on", show);
    show = !show;
})


