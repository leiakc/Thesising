
gsap.from('.navbar', { duration: 1, y: '-100%'})

gsap.to('.ball', { duration: 2.5, ease: "bounce.in", y: 500 });

window.addEventListener('scroll', reveal);

function reveal(){
  reveals = document.querySelectorAll('.reveal');

  for(var i = 0 ; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 250;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }

}


//
// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//       document.getElementById("myP").className = "test";
//     } else {
//       document.getElementById("myP").className = "";
//     }
//
//   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//       document.getElementById("yo").style.display = "block";
//     } else {
//       document.getElementById("yo").style.display = "none";
//     }
//
//     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//         document.getElementById("another").className = "";
//       } else {
//         document.getElementById("another").className = "textSize";
//       }
//
//       if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//           document.getElementById("vid").style.display = "block";
//         } else {
//           document.getElementById("vid").style.display = "none";
//         }
// }
