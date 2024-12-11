const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
let count = 0;

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "What took you so long??";
  gif.src = "https://media1.tenor.com/m/hBk8tzAU8hQAAAAC/chase-friendship.gif";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  count = count + 1;
  if (count === 2) {
    question.innerHTML = "umm...this is awkies :(";
  }

  if (count === 3) {
    question.innerHTML = "Are you really not saying yes";
  }

  if (count === 4) {
    question.innerHTML = "erm";
    yesBtn.style.display = "inline-block";
    gif.src = "https://media1.tenor.com/m/pufuaZtnUS4AAAAC/patrick-star.gif"
  }
});