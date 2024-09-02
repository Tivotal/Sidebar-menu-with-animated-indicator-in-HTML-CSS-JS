/* Created by Tivotal */

let links = document.querySelectorAll(".menu a");
let indicator = document.querySelector(".indicator");

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    links.forEach((item) => item.classList.remove("active"));

    link.classList.add("active");

    indicator.style.transform = `translateY(calc(${index}* 70px))`;
  });
});
