const input = document.querySelector("#guess");
const submitBtn = document.querySelector("#submit");
const resetBtn = document.querySelector("#new-game");
const guessList = document.querySelector("#guess-list");
const game = document.querySelector("#game");
const feedback = document.querySelector("#feedback");
const feedbackMain = document.querySelector("#feedbackMain");
const feedbackSub = document.querySelector("#feedbackSub");
//let guesses = [];


game.randomNum = Math.ceil(Math.random() * 100);
game.tries = 0;

submitBtn.addEventListener("click", () => {
    const guess = parseInt(input.value);
    
    game.tries = game.tries + 1;
    
    input.value = "";

    const listItem = document.createElement("li");
    if (isNaN(guess)) {
        //guesses.push(0);
        listItem.textContent = 0;
    }
    else {
        //guesses.push(guess);
        listItem.textContent = guess;
    }
    
    /*guesses.forEach((item) => {
        listItem.textContent = item;
        guessList.appendChild(listItem);
    });*/
    guessList.appendChild(listItem);
    guessList.classList.remove("hidden");
    
    if (guess === game.randomNum) {
        feedbackMain.classList.remove("wrong");
        feedbackMain.classList.add("correct");
        game.style.borderColor = window.getComputedStyle(feedbackMain).backgroundColor;
        feedbackMain.textContent = "Congratulations! You got it right!";
        input.disabled = true;
        submitBtn.disabled = true;
        feedbackSub.textContent = "";
        document.querySelector("#new-game").classList.remove("hidden");
    }

    if (guess !== game.randomNum) {
        feedbackMain.classList.remove("correct");
        feedbackMain.classList.add("wrong");
        game.style.borderColor = window.getComputedStyle(feedbackMain).backgroundColor;
        feedbackMain.textContent = "Wrong!"
        feedbackSub.textContent = guess > game.randomNum ? "Last guess was too high!": "Last guess was too low!";
        input.focus();

        if (game.tries == 10) {
        input.disabled = true;
        submitBtn.disabled = true;
        feedbackSub.textContent = "";
        feedbackMain.textContent = "!!!GAME OVER!!!";
        document.querySelector("#new-game").classList.remove("hidden");
        }
    }
    
    feedback.classList.remove("hidden");
    //game.tries = game.tries + 1;
});

resetBtn.addEventListener("click", (e) => {
    input.disabled = false;
    submitBtn.disabled = false;
    feedbackSub.textContent = "";
    feedbackMain.textContent = "";
    game.style.borderColor = "#a8a8a8";


    while (guessList.firstChild) {
        guessList.removeChild(guessList.firstChild);
    }
    
    //guesses = [];

    game.randomNum = Math.ceil(Math.random() * 100);
    game.tries = 0;
    feedback.classList.add("hidden");
    e.target.classList.add("hidden");
})