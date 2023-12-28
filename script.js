const slides = document.querySelectorAll(".slide");
const btns = document.querySelectorAll(".btn");
let currentSlide = 0;

// Function for manual navigation
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    manualNav(index);
    currentSlide = index;
  });
});

// js for image slide autoplay
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 10000);
  };
  repeater();
};
repeat();

// const slides = document.querySelectorAll(".slide");
// const btns = document.querySelectorAll(".btn");
// let currentSlide = 0;

// // Function for manual navigation
// var manualNav = function (manual) {
//   slides.forEach((slide) => {
//     slide.classList.remove("active");
//     btns.forEach((btn) => {
//       btn.classList.remove("active");
//     });
//   });

//   slides[manual].classList.add("active");
//   btns[manual].classList.add("active");
// };

// btns.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     manualNav(index);
//     currentSlide = index;
//   });
// });

// // js for image slide autoplay
// var repeat = function (activeClass) {
//   let active = document.getElementsByClassName("active");
//   let i = 1;

//   var repeater = () => {
//     setTimeout(function () {
//       slides[i].classList.add("active");
//       btns[i].classList.add("active");
//       i++;

//       if (slides.length == i) {
//         i = 0;
//       }
//       if (i >= slides.length) {
//         return;
//       }
//       repeater();
//     }, 5000);
//   };
//   repeater();
//   repeat();
// };
// repeat();

var menu = document.getElementById("menu-nav");
var hamburger = document.getElementById("hamburger");
hamburger.onclick = () => {
  menu.classList.toggle("muncul");
};

var search = document.getElementById("search");
var searchBox = document.getElementById("search-box");
var tombol = document.getElementById("ts");
tombol.onclick = () => {
  search.classList.toggle("search-muncul");
  searchBox.focus();
};

var tc = document.getElementById("tc");
var cart = document.getElementById("cart-menu");

tc.onclick = () => {
  cart.classList.toggle("active-cart");
};

// menghilangkan element

document.onclick = function (e) {
  if (!tombol.contains(e.target) && !search.contains(e.target)) {
    search.classList.remove("search-muncul");
  }
  if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("muncul");
  }
  if (!tc.contains(e.target) && !cart.contains(e.target)) {
    cart.classList.remove("active-cart");
  }
};
