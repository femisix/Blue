/* landing page slider*/

const phase1 = document.querySelector('.phase1');
const slides = phase1.getElementsByTagName('section');
var i = 0;

function nextSlide(){
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}
function prevSlide(){
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}


/* my landing page slider ends*/


/*responsive navbar*/
const navlinks = document.querySelector('.navlinks');
const closemenu = document.querySelector('.closemenu');
const openmenu = document.querySelector('.openmenu');

openmenu.addEventListener('click', show);
closemenu.addEventListener('click', klose);

function show(){
    navlinks.style.display = 'flex';
    navlinks.style.left = '0';
}

function klose(){
    navlinks.style.left = '100%';
}

/*responsive navbar ends*/


/*sticky navbar*/

const mediaQuery = window.matchMedia('(max-width:800px)');

if (mediaQuery.matches){
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })
}

