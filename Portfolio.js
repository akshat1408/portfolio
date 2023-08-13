let hamberger = document.querySelector(".hamberger");
let times = document.querySelector(".times");
let mobileNav = document.querySelector(".mobile-nav");

hamberger.addEventListener("click", function () {
  mobileNav.classList.add("open");
});

times.addEventListener("click", function () {
  mobileNav.classList.remove("open");
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwircqytAwK1i120u59CK1g2rHl2Z3EisUdbk82hOmZNsofs6TiFx7VjXxJEgIOohsswA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});