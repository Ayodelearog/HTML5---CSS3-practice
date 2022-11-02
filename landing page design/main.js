const mobileMenu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".close");
const mobileNav = document.querySelector("nav");

console.log(mobileMenu)
console.log(closeButton)

mobileMenu.addEventListener("click", () => {
    mobileNav.classList.add("open-nav");
})

closeButton.addEventListener("click", () => {
    mobileNav.classList.remove("open-nav");
})