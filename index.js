gsap.registerPlugin(ScrollTrigger);

// Dark Mode
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const toggleInputs = document.querySelectorAll(".toggle-input"); // Select all theme toggles
  const savedTheme = localStorage.getItem("theme") || "light";
  const themeMode = document.querySelector('.theme-mode-h')


  // Set initial checked state for all toggles
  toggleInputs.forEach(btn => {
    btn.checked = savedTheme === "dark";
  });

  // Apply the saved theme on load
  body.classList.add(`${savedTheme}-theme`);
  themeMode.innerHTML = `${savedTheme} mode:`

  // Listen for changes on any toggle
  toggleInputs.forEach(btn => {
    btn.addEventListener("change", function () {
      const newTheme = btn.checked ? "dark" : "light";

      // Update the theme
      body.classList.remove("light-theme", "dark-theme");
      body.classList.add(`${newTheme}-theme`);

      // Save the theme in localStorage
      localStorage.setItem("theme", newTheme);
      themeMode.innerHTML = `${newTheme} mode:`

      // Sync all toggles
      toggleInputs.forEach(toggle => {
        toggle.checked = btn.checked;
      });
    });
  });

  // Ensure minibar toggle is updated when minibar opens
  document.querySelector(".toggle-btn").addEventListener("click", function () {
    setTimeout(() => {
      const miniToggle = document.getElementById("theme-toggle-mini");
      if (miniToggle) {
        miniToggle.checked = localStorage.getItem("theme") === "dark";
      }
    }, 10);
  });
});


// add the drop-down button
let btn = document.querySelector('.toggle-btn');
let btnIcon = document.querySelector('.toggle-btn i');
let dropDownBar = document.querySelector('.dropdown-nav');

btn.addEventListener('click', () => {
  dropDownBar.classList.toggle('open');
  let IsOpen = dropDownBar.classList.contains('open');
  btnIcon.classList = IsOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

// the navbar get collapsed after clicking on sub-link in it
const navLink = document.querySelectorAll(".link");
navLink.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.dropdown-nav').classList.remove('open');
    btnIcon.classList.remove('fa-xmark');
    btnIcon.classList.add('fa-bars');
  });
});

// Function to handle clicks outside the navbar
document.addEventListener('click', (event) => {
  if (!dropDownBar.contains(event.target) && !btnIcon.contains(event.target)) {
    // If the click is outside the navbar and toggle button, collapse it
    dropDownBar.classList.remove('open');
    btnIcon.classList.remove('fa-xmark');
    btnIcon.classList.add('fa-bars');
  }
});

// It display the button when scrolling down

window.onscroll = function () {
  const backToTop = document.querySelector("#backToTop");
  const navBar = document.querySelector('nav');
  const miniBar= document.querySelector('.minibar');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTop.classList.add("visible");
    navBar.classList.add("moveDown");
  }
  else {
    backToTop.classList.remove("visible");
    navBar.classList.remove("moveDown");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const boxes = document.querySelectorAll(".container-items");

// about section boxes
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    togglepara(index);
    toggleTitle(index);
  });
});
function togglepara(index) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach((currContent, i) => {
    if (i === index) {
      currContent.classList.toggle('show')
    }
    else {
      currContent.classList.remove('show');
    }
  });
}

function toggleTitle(index) {
  const titles = document.querySelectorAll('.each-tabs');
  titles.forEach((title, i) => {
    if (i == index) {
      title.classList.toggle('hide');
    }
    else {
      title.classList.remove('hide');
    }
  });
}

// GSAP ANIMATION


// welcome part
gsap.to('.welcome-parent',{
  delay: 0.8,
  height: 0,
  ease: 'expoinOut',
  duration: 0.5
})

gsap.to('.welcome-child',{
  scaleY: 1,
  ease: 'power2.inOut',
  transformOrigin: "top",
  onComplete: ()=>{
    gsap.to('.welcome-child',{
      scaleY: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  },
});
// home page
gsap.from('#home',{
  delay: 1.3,
  opacity: 0,
})

gsap.from('.surname', {
  y: 50,
  opacity: 0,
  delay: 3,
  duration: 1,
  ease: "power2.out",
})
gsap.from('.marquee', {
  y: 50,
  opacity: 0,
  delay: 3.4,
  duration: 1,
  ease: "power2.out",
})
gsap.from('.home-btn', {
  y: 50,
  opacity: 0,
  delay: 3.6,
  duration: 1,
  ease: "power2.out",
})
gsap.from('.home-logo', {
  x: 50,
  opacity: 0,
  delay: 1.5,
  duration: 1,
  ease: "power2.out",
});

gsap.from('.col-2 .primary-heading h1, .col-2 .about-text, .col-2 .cv-btn2',{
  scrollTrigger: {
    trigger:'.col-2',
    start: 'top 100%',
    toggleActions: 'restart none reverse none',
  },
  y: (index, target)=>{
    if(target.matches(".primary-heading h1")) return -20;
    if(target.matches(".about-text")) return 50;
    if(target.matches('.cv-btn2')) return 20;
  },
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  ease: 'back.out(1.7)',
});
// gsap.from('.about-text', {
//   scrollTrigger:{
//     trigger: '.about-text',
//     start: "top 120%",
//     toggleActions: "restart none reverse none",
//     markers: true,
//   },
//   yPercent: 50,
//   stagger: 0.09,
//   opacity: 0,
//   duration: 1.3,
//   ease: 'power2.inOut'
// })