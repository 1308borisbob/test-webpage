const image = document.querySelector('#logo');
image.addEventListener('click', () => {
    const logo = image.getAttribute('alt');
    if (logo=='firefox') {
        image.setAttribute('src','images/logo-google.png');
        image.setAttribute('alt','google');
    } else if (logo=='google') {
        image.setAttribute('src','images/firefox-logo.jfif');
        image.setAttribute('alt','firefox');    
    }
});

const heading = document.querySelector('h1');
const changeUserButton = document.querySelector('#change-user');
function setUserName() {
  const userName = prompt("Please enter your name");
  if (userName && userName.trim()!=='') {
    localStorage.setItem("name", userName);
    heading.textContent = `This is test page, ${userName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  heading.textContent = `This is test page, ${storedName}`;
}
changeUserButton.addEventListener("click", () => {
  setUserName();
});



