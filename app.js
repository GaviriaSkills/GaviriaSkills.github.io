const parenteContainer = document.querySelector(".parent");
const childContainers = document.querySelectorAll(".child");

window.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        parenteContainer.classList.add("active-parent");
    }, 500);

    setTimeout(()=>{
        childContainers.forEach((child)=>{
            child.classList.add("active");
        });
    }, 1500);
});