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
        "file":"symfony-leptitjardinier.pdf"
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
        "dates": "JUIN 2021",
        "file": "rapport_stage_btssio_2020-2021.pdf"
    },
    {
        "titre":"AP - Basket",
        "description":"Lors de ma première année de BTS SIO, j'ai appris le langage PHP. Ainsi, j'ai eu comme projet la réalisation d'une page qui gère une ligue de basket en utilisant le modèle MVC. Ce travail était en équipe de deux, et nous avions pour mission la gestion des équipes, et la création de convocation au format PDF pour les arbitres.",
        "dates":"MARS 2021",
        "file":"ap-basket.pdf"
    },
    {
        "titre":"AP - Messagerie JAVA",
        "description":"La réalisation d'une messagerie en utilisant le langage Java et SQL est une mission qui m'a été donné pendant ma première année de BTS SIO. L'objectif est l'échange entre utilisateur de message. Chaque utilisateur possède ses identifiants.",
        "dates":"2020 - 2021",
        "file":"ap-messagerie-java.pdf"
    },
    {
        "titre":"AP - Anabase (hôtellerie)",
        "description":"Le projet Anabase est un projet réalisé durant le premier semestre de ma deuxième année de BTS SIO. C'est un projet de gestion d'hôtel et de réservation. Nous devions gérer le CRUD pour les hôtels, et également les réservations pour un hôtel. Anabase est un projet réalisé en équipe de deux, en utilisant le architecture MVC.",
        "dates":"2021 - 2022",
        "file":"ap-anabase.pdf"
    },
    {
        "titre":"Stage - Okantis",
        "description":"Durant la période du 03 janvier 2022 au 18 février 2022, j'ai réalisé mon second stage de BTS SIO dans l'entreprise Okantis, c'est la même entreprise que mon premier stage de BTS, mais elle a changé de nom. Le projet qui m'a été confié est la création d'un système de réservation de matériels et véhicules pour les locaux de Okantis. J'ai découvert le framework Vue.JS ainsi que les bases de ExpressJS.",
        "dates": "JANV-FEV 2022",
        "file":"rapport_stage_btssio_2022.pdf"
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

$('.nav-item').mouseover((event)=>{
    $(event.currentTarget).addClass('selected-item');
})

$('.nav-item').mouseout((event)=>{
    $(event.currentTarget).removeClass('selected-item');
})

$(window).scroll( function() {
    var scrolled_val = $(document).scrollTop().valueOf();
    $('.nav-item').removeClass('selected-item');
    if(scrolled_val > 800 && scrolled_val <= 1600){
        $('.about-item').addClass('selected-item');
    } else if(scrolled_val > 1600 && scrolled_val <= 2300){
        $('.parcours-item').addClass('selected-item');
    } else if(scrolled_val > 2300 && scrolled_val <= 3000){
        $('.skills-item').addClass('selected-item');
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
    if (currIndex > projects.size) {
        $('.project-image').attr('src', ``).css({ 'opacity': 0 }).animate({ 'opacity': 1 }, 500)
        $('.tiltle-text').hide().text("").fadeIn('slow');
        $('.project-tiltle').hide().text("Bientôt disponible").fadeIn('slow');
        $('.h1-date-project').hide().text("").fadeIn('slow');
        $('.download-cr').hide();
    } else {
        $('.project-image').css({ 'opacity': 0, 'backgroundImage': `url(images/projets/${currIndex}.png)` }).animate({ 'opacity': 1 }, 500)
        $('.project-description').hide().text(projects[currIndex].description).fadeIn('slow');
        $('.project-title').hide().text(projects[currIndex].titre).fadeIn('slow');
        $('.project-date-p').hide().text(projects[currIndex].dates).fadeIn('slow');
        if(!projects[currIndex].file == ""){
            $('.download-cr').hide().attr('href', `files/${projects[currIndex].file}`).fadeIn('slow');
        } else{
            $('.download-cr').hide();
        }
    }
}

// Not abble to send mail

function failedMail(){
    if(confirm("Toutes mes excuses, le système d'envoie de messages n'est pas fonctionnel.\n\nSouhaitez-vous m'envoyer un mail directement à :\nquentin.rodrigues1912@gmail.com")){
        window.location.href = "mailto:quentin.rodrigues1912@gmail.com";
    }
}