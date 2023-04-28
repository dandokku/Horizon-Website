// NAVIGATION BAR
const navIcon = document.querySelector(".nav-icon");
const navBar = document.querySelector(".nav-bar");
navIcon.addEventListener("click", ()=>{
  navBar.classList.toggle("active");
  console.log("click")
})

// Subscribe Section
let sbtn = document.querySelector(".subscribe-btn");
let sinp = document.querySelector(".subscribe-input");
sbtn.addEventListener("click", (w)=> {
  w.preventDefault();
  sinp.value == "" ? window.alert("Please enter your email") : window.alert("Subscription Successful")
  sinp.value = "";
})

// Overlay stuff
const modal = document.querySelector(".modal-section");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".modal-open");
const closeModalBtn = document.querySelector("#close-modal");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  closeModalBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown");

  document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modalClose();
  }
});

