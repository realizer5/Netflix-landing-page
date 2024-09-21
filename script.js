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

const trendingCards = document.querySelectorAll(".card");
// lightbox HTML
const div = document.createElement("div");
div.setAttribute("class", "preview-container");
div.innerHTML = `<div class="preview">
  <div class="preview-top">
      <div class="preview-bg"></div>
  </div>
  <div class="preview-bottom">
      <ul class="preview-list">
      </ul>
      <p class="preview-para"></p>
      <button type="submit" class="btn btn-lg">
        <span>Get Started</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="chevron-right">
                        <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
  </div>
</div>`;

const renderLightbox = (cardID) => {
  document.body.append(div);
  document.body.style.overflow = `hidden`;
  const previewBg = document.querySelector(".preview-bg");
  previewBg.style.background = `url(./img/preview-${cardID}.jpg`;
};

trendingCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    renderLightbox(card.getAttribute("id"));
  });
});
