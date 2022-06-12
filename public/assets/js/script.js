let show = true;
let showModal = false;

let Description = 'Não informado.';

const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelector(".menu-toggle");
const burguer = document.querySelector(".burguer");
const aboutM = document.querySelector('.about');
const homeM = document.querySelector('.home');

function acao(get) {


    document.body.style.overflow = showModal ? "hidden" : "initial";

    let modal = document.querySelector('.modal-main');

    if (showModal) {
        modal.style.display = 'block';
        document.getElementById('msg').innerHTML = AboutMy(get);
    }
    else {
        modal.style.display = 'none';
    }

    showModal = !showModal;


}

menuToggle.addEventListener("click", () => {

    if (!showModal) {
        document.body.style.overflow = show ? "hidden" : "initial";
        menuSection.classList.toggle("on", show);
        show = !show;
    }
})


//
function AboutMy(skiil) {
    switch (skiil) {
        case 'il':
            return 'Adobe Illustrator: tenho uma experiência intermediária nesta ferramenta, uso principalmente para: Criação de UI e conceitos de layout. Uso desde 2019!';
            break;
        case 'ps':
            return 'Photoshop:esta ferramenta foi onde tive meu primeiro contato em 2014, e desde então venho usando até hoje! Para criação de UI, correção de imagem e algumas sobreposições.<a href="https://www.behance.net/CPGG">Behance</a>';
            break;
        case 'af':
            return 'After Effects: Apos a edição no premiere se necessário aplicar alguns efeitos ou algo mais complexo. Uso desde: 2015!';
            break;
        case 'pr':
            return 'Premiere: Realizo pequenas edições e cortes, além de produzir videos leves quando últil. Uso desde 2017!';
            break;
        case 'vs':
            return 'Visual Studio: Visual studio(vs) e Visual studio code(vscode). O vs uso desde 2018 com finalidade de estudo. Mas somente em 2021 comecei a desenvolver meus projetos pessoais, atualmente tenho um projeto com foco em automatização de tarefas web. com o uso do framework selenium entre outros... vscode é o meu preferido quando o assunto é desenvolver aplicações web e afins, uso desde 2019! ';
            break;
        case 'wd':
            return 'Microsoft Word: Nível intermediário!';
            break;
        case 'ex':
            return 'Microsoft Excel: Nível intermediário!';
            break;
        case 'ht':
            return 'HTML5: Aprendendo desde 2019!';
            break;
        case 'cs':
            return 'CSS3: Aprendendo desde 2019!<br><ol><li>->Keyframes</li><li>->.media</li><li>->.etc...</li></ol>';
            break;
        case 'js':
            return 'JavaScript: Aprendendo desde 2021!';
            break;
        case 'ph':
            return 'PHP: Aprendendo desde 2022! Com um site publicado! (Sistem de CRUD com cadasto)<br><a href="https://itsus.herokuapp.com/public/index.php">Site em Php</a> ';
            break;
        case 'ch':
            return 'C#(Csharp): Venho usando desta ferramenta desde 2018! Quando começei com Unity e agora abrindo mais possibilidades!'+
            '<ol><li>->Framework</li><li>->.Net</li><li>->.Core</li><li>->Rest</li></ol>';
            break;
        default:
            break;
    }
}

/*

'il'
'ps'
'af'
'pr'
'vs'
'wd'
'ex'
'ht'
'cs'
'js'
'ph'
'ch'
*/

