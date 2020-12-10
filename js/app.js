/* *****variables***** */
const themeToggle = document.getElementById("theme-toggle");
const theme = document.querySelector("#theme-link");

/* *****functions***** */

/* *****event listeners***** */
// Toggle between dark mode & light mode
themeToggle.addEventListener("click", () => {
  if (theme.getAttribute("href") === "./css/light-theme.css") {
    // change theme toggle icon to sun
    themeToggle.className = "fas fa-sun theme-toggle";
    // switch to dark mode
    theme.setAttribute("href", "./css/dark-theme.css");
  } else {
    // change theme toggle icon to moon
    themeToggle.className = "fas fa-moon theme-toggle";
    // switch to light mode
    theme.setAttribute("href", "./css/light-theme.css");
  }
});
