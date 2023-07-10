// TRANSIÇÃO SECTIONS
window.sr = ScrollReveal({reset:true});

sr.reveal(".products", {duretion:500});
sr.reveal(".sobre-nos", {duretion:500});
sr.reveal(".sobre-de-encontrar", {duretion:500});
sr.reveal(".onde-encontrar", {duretion:500});
sr.reveal(".curso", {duretion:500});

// SLIDER BANNERS
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx=0;

function carrossel(){
    idx++;
    
   if(idx >img.length - 1){
    idx = 0;
   }

    imgs.style.transform = `translateX(${-idx * 1440}px)`;
}

setInterval(carrossel,5080);

// SLIDER TIME LINE
const imgs2 = document.getElementById("img2");
const img2 = document.querySelectorAll("#img2 img2");

let idx2=0;

function carrossel(){
    idx++;
    
   if(idx >img2.length - 1){
    idx = 0;
   }

    imgs2.style.transform = `translateX(${-idx * 1034}px)`;
}

setInterval(carrossel,1080);