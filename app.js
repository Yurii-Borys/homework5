"use strict"
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}
  


  
//slide show 2
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  
  if (n > slides.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex2-1].style.display = "block";  

}

//incr percent
const counters = document.querySelectorAll('.increm');

function updater(increm) {
  const counterEnd = +increm.dataset.value;
  let counterValue = 0;
  let id = setInterval(tik, 90);

  function tik() {
    if (counterValue >= counterEnd) {
      clearInterval(id);
    } else {
      counterValue++;
      increm.innerHTML = counterValue;
    }
  }
}

const moveDetect = () => {
  let isShown = false;

  return () => {
    if (!isShown) {
      counters.forEach(increm => {
        updater(increm);
      })
      isShown = true;
    } 
  }
}

const moveOn = moveDetect();

function checkPosition() {
  const isVisible = counters[0].getBoundingClientRect().top < window.innerHeight;
  if (isVisible) moveOn();
}

document.addEventListener('scroll', checkPosition);


//incr percent2
const counters2 = document.querySelectorAll('.percentage');

function updater(percentage) {
  const counterEnd2 = +percentage.dataset.value;
  let counterValue2 = 0;
  let id = setInterval(tik, 40);

  function tik() {
    if (counterValue2 >= counterEnd2) {
      clearInterval(id);
    } else {
      counterValue2++;
      percentage.innerHTML = counterValue2;
    }
  }
}

const moveDetect2 = () => {
  let isShown = false;

  return () => {
    if (!isShown) {
      counters2.forEach(percentage => {
        updater(percentage);
      })
      isShown = true;
    } 
  }
}

const moveOn2 = moveDetect2();

function checkPosition2() {
  const isVisible = counters2[0].getBoundingClientRect().top < window.innerHeight;
  if (isVisible) moveOn2();
}

document.addEventListener('scroll', checkPosition2);

//slides 2
function ready() {
  let slideIndex = 0;
  let slides = document.querySelectorAll('.tower-sec');

  document.querySelector('.prev2').addEventListener('click', () => plusSlides(-1));
  document.querySelector('.next2').addEventListener('click', () => plusSlides(1));

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function calcSlideNumber(num) {
    if (num < 0) {
      if (num % slides.length === 0) return 0;

      return slides.length + (num % slides.length);
    }

    return num % slides.length;
  }
  
  function switchSlide(n, order) {
    slides[n].style.display = "block";
    slides[n].style.order = order;
  }

  function showSlides(n) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    switchSlide(calcSlideNumber(n), 1);
    switchSlide(calcSlideNumber(n+1), 2);
    switchSlide(calcSlideNumber(n+2), 3);
  }
}

document.addEventListener("DOMContentLoaded", ready);

// slides3
  function ready2() {
    let slideIndex2 = 0;
    let slides2 = document.querySelectorAll('.logo-icon-img');
  
    document.querySelector('.prev3').addEventListener('click', () => plusSlides2(-1));
    document.querySelector('.next3').addEventListener('click', () => plusSlides2(1));
  
    showSlides2(slideIndex2);
  
    function plusSlides2(n) {
      showSlides2(slideIndex2 += n);
    }
  
    function calcSlideNumber2(num) {
      if (num < 0) {
        if (num % slides2.length === 0) return 0;
  
        return slides2.length + (num % slides2.length);
      }
  
      return num % slides2.length;
    }
    
    function switchSlide2(n, order) {
      slides2[n].style.display = "block";
      slides2[n].style.order = order;
    }
  
    function showSlides2(n) {
      for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
      }
  
      switchSlide2(calcSlideNumber2(n), 1);
      switchSlide2(calcSlideNumber2(n+1), 2);
      switchSlide2(calcSlideNumber2(n+2), 3);
      switchSlide2(calcSlideNumber2(n+3), 4);
      switchSlide2(calcSlideNumber2(n+4), 5);
      
    }
  }
  
  document.addEventListener("DOMContentLoaded", ready2);