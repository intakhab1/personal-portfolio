var typeData = new Typed(".role", {
    strings: [
    "Full Stack Developer",
    "Web Developer",
    "Tool Engineer",
    "UI-UX Designer",
    "Backend Developer",
    "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

const root = document.documentElement.style;
const get = (param) => document.getElementById(`${param}`);
const btnmode = get("btn-mode");
const modetext = get("mode-text");
const modeicon = get("mode-icon");
const btnsubmit = get("submit");
const navLogo = get("nav-logo");


// DARK MODE
btnmode.addEventListener("click", () => {
    if (darkMode == false) {
      applyDarkMode();
    } else {
      applyLightMode();
    }
  });

let darkMode = false; // Then Apply Dark Mode
// Initialise UI
function init(){
  
    //1- WITHOUT CONSIDERING USER PREFERENCE:-
    const value = localStorage.getItem("dark-mode");
    if(value == null){
      localStorage.setItem("dark-mode" , darkMode);
    }
    else if(value == "true"){
      applyDarkMode();
    }
    else if(value == "false"){
      applyLightMode();
    }
}
init();

  // Switch to Dark mode
function applyDarkMode() {
    root.setProperty("--lm-bg", "#141D2F");
    root.setProperty("--lm-text", "white");
    modetext.innerText = "Light";
    modeicon.src = "./assets/userAsset/sun-icon.svg";
    navLogo.src = "./assets/userAsset/NavLogo2.png"; // changing logo(i) 
    darkMode = true;
    localStorage.setItem("dark-mode", darkMode);
  }
  // Switch to light mode
  function applyLightMode() {
    root.setProperty("--lm-bg", "#F6F8FF");
    root.setProperty("--lm-text", "black");
    modetext.innerText = "Dark";
    modeicon.src = "./assets/userAsset/moon-icon.svg";
    navLogo.src = "./assets/userAsset/NavLogo.png"; // changing logo(i) 
    darkMode = false;
    localStorage.setItem("dark-mode", darkMode);
  }