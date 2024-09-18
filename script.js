const inputMail = document.getElementById("inputMail");
const errorTextDiv = document.querySelector(".error-text-div");
const errorText = document.getElementById("errorText");

inputMail.addEventListener("input", (e) => {
  const inputData = e.target.value;
  if (inputData.length < 5) {
    // Email is required.
    errorText.innerText = `Email is required.`;
  } else {
    // Please enter a valid email address.
    errorText.innerText = `Please enter a valid email address.`;
  }
  const inputValid = inputMail.checkValidity();
  if (inputValid === true && inputData.length > 0) {
    inputMail.style.borderColor = "rgb(43,184,113)";
    errorTextDiv.style.display = "none";
  } else {
    inputMail.style.borderColor = "rgb(235,57,66)";
    errorTextDiv.style.display = "flex";
  }
});

// netflix removed this feature

// const region = document.getElementById("region");
// const contentType = document.getElementById("contentType");

// region.addEventListener("change", (e) => {
//   value = region.value;
//   if (value === "india") {
//     contentType.innerHTML = `<option value="">Movies</option><option value="">Tv Shows</option>`;
//   } else {
//     contentType.innerHTML = `<option value="">Movies - English</option><option value="">Movies - Other languages</option><option value="">Tv Shows - English</option><option value="">Tv Shows - Other languages</option>`;
//   }
// });

const leftScroll = document.getElementById("leftScroll");
const rightScroll = document.getElementById("rightScroll");
const cardList = document.querySelector(".trending-card-list");

leftScroll.addEventListener("click", (e) => {
  cardList.scrollLeft -= 1000;
});

rightScroll.addEventListener("click", (e) => {
  cardList.scrollLeft += 1000;
});

cardList.addEventListener("scroll", (e) => {
  if (cardList.scrollLeft === cardList.scrollWidth - cardList.offsetWidth) {
    rightScroll.parentElement.style.right = `-5rem`;
  } else {
    rightScroll.parentElement.style.right = `0`;
  }
  if (cardList.scrollLeft === 0) {
    leftScroll.parentElement.style.left = `-5rem`;
  } else {
    leftScroll.parentElement.style.left = `0`;
  }
});

const trendingCards = document.querySelectorAll('.card');

trendingCards.forEach(card=>{
  card.addEventListener('click', e=>{
    
  })
})