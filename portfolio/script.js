// EFEK FADE IN
$(document).ready(function () {
  // Saat halaman dimuat pertama kali
  $(".fade-in").each(function () {
    $(this).animate({ opacity: 1 }, 1000);
  });

  // // Saat digulir
  // $(window).scroll(function() {
  //     $('.scroll').each(function() {
  //         var position = $(this).offset().top;
  //         var scrollPosition = $(window).scrollTop();
  //         var windowHeight = $(window).height();
  //         if (position < scrollPosition + windowHeight - 50) {
  //             $(this).animate({ opacity: 1 }, 1000);
  //         }
  //     });
  // });
});

window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowheight = window.innerHeight;
    const revealtop = reveals[i].getBoundingClientRect().top;
    const revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// HAMBURGER MENU
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const responsiveMenu = document.querySelector(".responsive-menu");

  hamburgerIcon.addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah perilaku default dari tautan
    responsiveMenu.classList.toggle("active");
  });
});

// SCROLL TO TOP
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#back-to-top-btn").fadeIn();
      $("#back-to-top-btn").css({
        transform: "translateY(0px)",
        transform: "scale(1.2)",
      });
    } else {
      $("#back-to-top-btn").fadeOut();
      $("#back-to-top-btn").css({
        transform: "translateY(200px)",
      });
    }
  });

  $("#back-to-top-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});

const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = " Web Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = " UI/UX Designer";
  }, 4000);
};

textLoad();
setInterval(textLoad,12000);
