const headerTop = document.querySelector("#header-top");
const headerMain = document.querySelector("#header-main");
const mainHeading = document.querySelector("h1");
mainHeading.style.color = window.getComputedStyle(document.querySelector("#header-main"))["backgroundColor"];

function switchColor() {
    let sibling;
    if (this.nextElementSibling)
        sibling = this.nextElementSibling;
    else
        sibling = this.previousElementSibling;

    if (this.classList.contains("black")) {
        this.classList.replace("black", "burlywood");
        sibling.classList.replace("burlywood", "black");
        mainHeading.style.color = window.getComputedStyle(document.querySelector("#header-main"))["backgroundColor"];
    } else {
        this.classList.replace("burlywood", "black");
        sibling.classList.replace("black", "burlywood");
        mainHeading.style.color = window.getComputedStyle(document.querySelector("#header-main"))["backgroundColor"];
    }
}

headerTop.addEventListener("click", switchColor);
headerMain.addEventListener("click", switchColor);