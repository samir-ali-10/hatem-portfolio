let profileBtn = document.querySelector(".page .profile-btn");
let contactBtn = document.querySelector(".page .contact-btn");
let projectsBtn = document.querySelector(".page .projects-btn");
let profileSectionBtn = document.querySelector(".profile .content .visit");

let modalProfile = document.querySelector(".profile-modal")
let closeMo = document.querySelector(".close-profile-modal");

profileBtn.addEventListener("click", () => {
    modalProfile.showModal();
})

closeMo.addEventListener("click", () => {
    modalProfile.close();
})
profileSectionBtn.addEventListener("click", () => {
    modalProfile.showModal();
})

closeMo.addEventListener("click", () => {
    modalProfile.close();
})

let modalContact = document.querySelector(".contact-modal");
let closeContactModal = document.querySelector(".close-contact-modal");

contactBtn.addEventListener("click", () => {
    modalContact.style.display = "block"
})
closeContactModal.addEventListener("click", () => {
    modalContact.close();
})

let modalProjects = document.querySelector(".projects-modal");
let closeProjectsModal = document.querySelector(".close-projects-modal");

projectsBtn.addEventListener("click", () => {
    modalProjects.showModal();
})
closeProjectsModal.addEventListener("click", () => {
    modalProjects.close();
})