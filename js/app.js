// Inits
AOS.init();

// Variables & constants

var h1 = document.querySelector('.h1-text');
// var navSmall = document.querySelector('.barres');
// var barre1 = document.querySelector('.barre1');
// var barre2 = document.querySelector('.barre2');
// var barre3 = document.querySelector('.barre3');
// var nav = document.querySelector('.navbar');
// var allBarre = document.querySelectorAll('.barre');

const indicators = document.getElementsByClassName("screen-indicator");
const progressElm = document.getElementsByClassName("progress")[0];
const prevBtn = document.querySelector(".previous-project")
const nextBtn = document.querySelector(".next-project")
const projectImage = document.querySelector('.projectImage')

// Datas

const projects = [
    {
        "titre":"Symfony - LePtitJardinier",
        "description":"J'ai utilisé le Framework Symfony pour ce projet. L'objectif de ce projet est la création d'un site de jardinerie, dans le but de créer des devis pour tailler une ou plusieurs haies. J'ai également intégré un système d'authentification sécurisé, avec une contrôle d'habilitation fonctionnel.",
        "dates": "AVRIL 2022",
        "file":""
    },
    {
        "titre":"Angular - Gestion des visites",
        "description":"Durant ma formation BTS SIO, la réalisation d'un projet avec l'utilisation du Framework Angular m'a été demandé. De plus, l'utilisation d'une API REST était obligatoire. Je suis donc capable de créer une application WEB à l'aide de ce Framework.",
        "dates": "2021 - 2022",
        "file":""
    },
    {
        "titre": "Stage - SILPC",
        "description": "Durant la période du 24 mai 2021 au 30 juin 2021, j'ai réalisé un stage dans l'entreprise SILPC, dans le cadre de mon BTS SIO. Le projet qui m'a été confié est la création d'un système de réservation de salles de réunion et de bureaux pour les locaux du SILPC. J'ai découvert le framework Symfony ainsi que les bases de AJAX.",
        "dates": "2020 - 2021",
        "file": "rapport_stage_btssio_2020-2021.pdf"
    },
    {
        "titre":"AP - Basket",
        "description":"Lors de ma première année de BTS SIO, j'ai appris le langage PHP. Ainsi, j'ai eu comme projet la réalisation d'une page qui gère une ligue de basket en utilisant le modèle MVC. Ce travail était en équipe de deux, et nous avions pour mission la gestion des équipes, et la création de convocation au format PDF pour les arbitres.",
        "dates":"2020 - 2021",
        "file":"ap-basket.pdf"
    },
    {
        "titre":"AP - Messagerie JAVA",
        "description":"La réalisation d'une messagerie en utilisant le langage Java et SQL est une mission qui m'a été donné pendant ma première année de BTS SIO. L'objectif est l'échange entre utilisateur de message. Chaque utilisateur possède ses identifiants.",
        "dates":"2020 - 2021",
        "file":""
    }
]

// Loading screen

const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    loader.classList.add('fondu-out');

    new Typewriter(h1, {
        delay: 80
    })
        .typeString('Bonjour, je suis <span style="color: #FCBF49"> Rodrigues Quentin</span>')
        .pauseFor(100)
        .changeDelay(35)
        .typeString('<br><span style="font-weight: normal; font-size: 20px; line-height: 30px">étudiant en <a style="color: black" title="En savoir plus sur le BTS Services Informatiques aux Organisations." onclick="showBtssio()"><u class="hover-btssio">BTS SIO</u></a>, spécialisé en développement.</span>')
        .start()
})

$('.content-btssio').hide()
$('body').css('overflow', 'auto')
var isBtssioOpen = false;

function showBtssio(){
    $('.content-btssio').fadeIn();
    $('body').css('overflow', 'hidden')
    isBtssioOpen = true;
}

function hideBtssio(){
    $('.content-btssio').fadeOut();
    $('body').css('overflow', 'auto')
    isBtssioOpen = false;
}

// Parcours SVG rotation

const frise = document.querySelector(".frise-svg");

function rotateFrise() {
    if (window.matchMedia('(max-width: 850px)').matches) {
        frise.setAttribute("src", 'images/svg/parcoursResponsive.svg');
    } else {
        frise.setAttribute("src", 'images/svg/parcours.svg');
    }
}
window.addEventListener('resize', rotateFrise);

rotateFrise();

// Navigation menu

// var navEnable = false;
// $('.reponsiveNav').hide();

// navSmall.addEventListener('click', () => {
//     if (!navEnable) {
//         openNav();
//     } else {
//         closeNav();
//     }

//     function openNav() {
//         nav.style.width = '100%';
//         nav.style.height = '25vh';

//         barre2.style.opacity = '0';

//         barre1.style.width = '50px';
//         barre2.style.width = '50px';
//         barre3.style.width = '50px';

//         barre1.style.position = 'absolute';
//         barre2.style.position = 'absolute';
//         barre3.style.position = 'absolute';

//         barre1.style.transform = 'rotate(45deg)';
//         barre2.style.transform = 'rotate(45deg)';
//         barre3.style.transform = 'rotate(-45deg)';

//         barre1.style.marginTop = '8px';
//         barre3.style.marginBottom = '8px';

//         navSmall.style.display = 'block';
//         navSmall.style.top = '20px';
//         navSmall.style.left = '10px';

//         $('nav').css({ 'border-bottom-left-radius': '20px' });
//         $('.reponsiveNav').show(700);
//         navEnable = true;
//     }

//     function closeNav() {
//         nav.removeAttribute("style");
//         navSmall.removeAttribute("style");
//         barre1.removeAttribute("style");
//         barre2.removeAttribute("style");
//         barre3.removeAttribute("style");

//         $('nav').css({ 'border-bottom-left-radius': '0' });
//         $('.reponsiveNav').hide(300);
//         navEnable = false;
//     }

//     $(window).resize(function () {
//         var win = $(this);
//         if (win.height() > 750) {
//             closeNav();
//             $('nav').css({ 'border-bottom-left-radius': '20px' });
//         } else {
//             $('nav').css({ 'border-bottom-left-radius': '0' });
//         }
//     })
// })

$('.nav-item').mouseover((event)=>{
    $(event.currentTarget).addClass('selected-item');
})

$('.nav-item').mouseout((event)=>{
    $(event.currentTarget).removeClass('selected-item');
})

$(window).scroll( function() {
    var scrolled_val = $(document).scrollTop().valueOf();
    $('.nav-item').removeClass('selected-item');
    if(scrolled_val > 800 && scrolled_val <= 2000){
        $('.skills-item').addClass('selected-item');
    } else if(scrolled_val > 2000 && scrolled_val <= 2500){
        $('.parcours-item').addClass('selected-item');
    } else if(scrolled_val > 2500 && scrolled_val <= 3000){
        $('.about-item').addClass('selected-item');
    } else if(scrolled_val > 3000 && scrolled_val <= 4800){
        $('.project-item').addClass('selected-item');
    } else if(scrolled_val > 4800 && scrolled_val <= 5200){
        $('.graduate-item').addClass('selected-item');
    } else if(scrolled_val > 5200 && scrolled_val <= 6500){
        $('.veille-item').addClass('selected-item');
    } else if(scrolled_val > 6500){
        $('.contact-item').addClass('selected-item');
    }
});

// Projects manager (stepper)

let currIndex = 0;

controls();

function previous() {
    indicators[currIndex].style.transitionDelay = "0s";
    indicators[currIndex].classList.remove("completed");
    --currIndex;
    progressElm.style.width = `${(currIndex / (indicators.length - 1)) * 100}%`;
    controls();
}

function next() {
    ++currIndex;
    indicators[currIndex].style.transitionDelay = "0.6s";
    indicators[currIndex].classList.add("completed");
    progressElm.style.width = `${(currIndex / (indicators.length - 1)) * 100}%`;
    controls();
}

function controls() {
    if (currIndex <= 0) {
        prevBtn.style.pointerEvents = 'none';
        prevBtn.style.opacity = '20%';
    } else if (currIndex >= indicators.length - 1) {
        nextBtn.style.pointerEvents = 'none';
        nextBtn.style.opacity = '20%';
    } else {
        prevBtn.style.pointerEvents = 'auto';
        nextBtn.style.pointerEvents = 'auto';
        nextBtn.style.opacity = '100%';
        prevBtn.style.opacity = '100%';
    }
    changeProjectInfo();
}

function changeProjectInfo() {
    if (currIndex > 4) {
        $('.projectImage').attr('src', ``).css({ 'opacity': 0 }).animate({ 'opacity': 1 }, 500)
        $('.tiltle-text').hide().text("").fadeIn('slow');
        $('.project-tiltle').hide().text("Bientôt disponible").fadeIn('slow');
        $('.h1-date-project').hide().text("").fadeIn('slow');
        $('.download-cr').hide();
    } else {
        $('.projectImage').attr('src', `images/projets/${currIndex}.png`).css({ 'opacity': 0 }).animate({ 'opacity': 1 }, 500)
        $('.tiltle-text').hide().text(projects[currIndex].description).fadeIn('slow');
        $('.project-tiltle').hide().text(projects[currIndex].titre).fadeIn('slow');
        $('.h1-date-project').hide().text(projects[currIndex].dates).fadeIn('slow');
        $('.download-cr').hide().attr('href', `files/${projects[currIndex].file}`).fadeIn('slow');
    }
}

// Not abble to send mail

function failedMail(){
    if(confirm("Toutes mes excuses, le système d'envoie de messages n'est pas fonctionnel.\n\nSouhaitez-vous m'envoyer un mail directement à :\nquentin.rodrigues1912@gmail.com")){
        window.location.href = "mailto:quentin.rodrigues1912@gmail.com";
    }
}