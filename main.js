//Index page script

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.containerleft, .containerright').forEach(el => {
  observer.observe(el);
});



// Lekérjük az aktuális oldal fájlnevét és eltávolítjuk az esetleges keresőparamétereket
const currentPage = window.location.pathname.split("/").pop().split("?")[0];

// console.log(currentPage); // ideiglenesen bekapcsolható hibakereséshez

document.querySelectorAll('.topnav a').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});



//Future page script

document.querySelectorAll('.slider').forEach(function (slider) {
  const slides = slider.querySelectorAll('.slide');
  let current = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  };

  slider.querySelector('.prev').addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  slider.querySelector('.next').addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  showSlide(current);
});


//Contact page script

document.querySelector("form").addEventListener("submit", function (e) {
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  if (!email.value.includes("@")) {
    alert("Please enter a valid email address.");
    email.focus();
    e.preventDefault();
    return;
  }

  if (!/^\+?[0-9\s\-]{6,}$/.test(phone.value)) {
    alert("Please enter a valid phone number (at least 6 digits).");
    phone.focus();
    e.preventDefault();
    return;
  }

  if (message.value.trim().length < 10) {
    alert("Please write a longer message (at least 10 characters).");
    message.focus();
    e.preventDefault();
    return;
  }
});
