
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