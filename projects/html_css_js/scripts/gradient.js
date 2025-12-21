buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const divs = document.querySelectorAll(".linear, .radial, .conical");
    divs.forEach((div) => {
      if (div.classList.contains(btn.id))
        div.classList.add("active");
      else
        div.classList.remove("active");
    });
  });
})