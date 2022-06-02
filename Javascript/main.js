// document.body.addEventListener("scroll", (e) => {
//   const firstDeliveryItem = document.getElementById("first-item");
//   const scrollPosition = window.scrollY;
//   if (firstDeliveryItem === scrollPosition) {
//     console.log("Hey");
//     console.log(scrollPosition);
//   }
// });

const closeBtn = document.getElementById("close-btn");
const menuBar = document.querySelector(".nav-icon-box");
const sideMenu = document.querySelector(".side-menu");
menuBar.addEventListener("click", () => {
  sideMenu.classList.add("visible");
});
closeBtn.addEventListener("click", () => {
  sideMenu.classList.add("remove-side-menu");
  sideMenu.classList.remove("visible");
});
