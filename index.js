
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


const boxes = document.querySelectorAll(".each-tabs");

// about section boxes
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {    
    toggleIcon(box,index);
  });
});

function toggleIcon(box,index) {
  const eachCheckox = document.querySelectorAll('.plus')
  eachCheckox.forEach((checkbox, i)=>{
    if(i === index){
      checkbox.checked = !checkbox.checked;
      box.style.maxHeight = box.ScrollHeight + "px"; 
    }
    else{
      checkbox.checked = false;
      box.style.maxHeight = null;
    }
  })
}

// -----------------------GSAP ANIMATION--------------------------

// --------Welcome Part
gsap.to('.welcome-parent',{
  delay: 0.8,
  height: 0,
  ease: 'expoinOut',
  duration: 0.5,
})
const textElement = document.querySelector('.welcome-child')
const text = textElement.innerText;
textElement.innerHTML = text.split("").map(char =>{
  if(char === " " ) return `<span>&nbsp;</span>`
  return `<span>${char}</span>`;
}).join("");

gsap.to(".welcome-child span", {
  duration: 0.5,
  stagger: 0.08,
  opacity: 1,
  onComplete: ()=>{
    gsap.to('.welcome-child',{
      opacity: 0,
      duration: 0.2,
      ease: "power2.inOut",
    });
  },
});

// --------------Home Page
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

// -------About Page
gsap.from('.col-2 .main-heading, .col-2 .about-text, .col-2 .hover-parent, .container-items',{
  opacity: 0,
  scrollTrigger: {
    trigger:'.col-2',
    start: 'top 70%',
  },
  y: (index, target)=>{
    if(target.matches(".main-heading")) return -20;
    if(target.matches(".about-text")) return 50;
    if(target.matches('.hover-parent')) return 20;
  },
  
  stagger: 0.5,
  duration: 3,
  ease: 'back.out(1.7)',
});

const hoverTl = gsap.timeline();
hoverTl.pause();
hoverTl.to(".hover-clr",{
  width: "calc(100% + 1.48em)",
  ease: "Elastic.easeOut(0.25)",
  duration: 0.5,
});
hoverTl.to(".hover-clr",{
  width: "2em",
  left:"calc(100% - 1.48em)",
  ease: "Elastic.easeOut(0.25)",
  duration: 0.5,
});
const hoverDiv = document.querySelector(".download-link");
hoverDiv.addEventListener("mouseenter", ()=>{
  hoverTl.play();
})
hoverDiv.addEventListener('mouseleave',()=>{
  hoverTl.reverse();
})

// hire me button function

function sendEmail(){
  const receiver = "sachinprajapati0203@gmail.com";
  const subject = "Job Opportunity - Portfolio Contact";
  const body = `Hello,
    I came across your portfolio and I’m interested in discussing a job opportunity with you.

    Looking forward to your response.

    Best regards,
    [Enter your name here]`;

  const mailtoLink = `mailto:${receiver}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

(function(){
  emailjs.init("ozKGDyQ4-q9_Z0kA8");
})();

document.getElementById("contact_form").addEventListener('submit',function(event){
  event.preventDefault();
  const button = document.querySelector(".btn-submit i");
  emailjs.sendForm('service_1uvg5f6', 'template_ne1k3wd', this)
  .then(() => {

    button.classList.add("fly");
      button.addEventListener("animationend", () => {
        button.classList.remove("fly");
      }, { once: true });
      
    alert("✅ Message sent successfully!");
    this.reset();
  }, (error) => {
    alert("❌ Failed to send message: " + JSON.stringify(error));
  });
});