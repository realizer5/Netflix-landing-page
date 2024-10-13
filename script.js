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

const region = document.getElementById("region");
const contentType = document.getElementById("contentType");
region.addEventListener("change", (e) => {
  value = region.value;
  if (value === "india") {
    contentType.innerHTML = `<option value="">Movies</option><option value="">Tv Shows</option>`;
  } else {
    contentType.innerHTML = `<option value="">Movies - English</option><option value="">Movies - Other languages</option><option value="">Tv Shows - English</option><option value="">Tv Shows - Other languages</option>`;
  }
});

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
  <div class="close-btn-div">
  <div class="close-btn" onClick="removeLightbox()">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="XStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z" fill="currentColor"></path></svg>
  </div>
  </div>
  <div class="preview-top">
      <div class="preview-bg"></div>
      <img src="" alt="">
  </div>
  <div class="preview-bottom">
      <ul class="preview-list"></ul>
      <p class="preview-para"></p>
      <button type="submit" class="btn btn-md">
        <span>Get Started</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="chevron-right">
                        <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
  </div>
</div>`;

const previewData = {
  card1:
    "<li>2024</li><li>A</li><li>Movie</li><li>Thrillers</li><li>Dramas</li>",
  card2:
    "<li>2024</li><li>U/A 13+</li><li>Movie</li><li>Action</li><li>Romance</li><li>Dramas</li>",
  card3:
    "<li>2024</li><li>A</li><li>Movie</li><li>Comedies</li><li>Action</li><li>Thrillers</li>",
  card4:
    "<li>2024</li><li>U/A 16+</li><li>Movie</li><li>Thrillers</li><li>Dramas</li>",
  card5:
    "<li>2024</li><li>U/A 16+</li><li>Movie</li><li>Comedies</li><li>Romance</li>",
  card6:
    "<li>2024</li><li>U/A 16+</li><li>Movie</li><li>Comedies</li><li>Dramas</li>",
  card7:
    "<li>2024</li><li>U/A 13+</li><li>Movie</li><li>Action</li><li>Sci-Fi</li><li>Adventure</li>",
  card8:
    "<li>2017</li><li>U/A 13+</li><li>Movie</li><li>Action</li><li>Thrillers</li><li>Sci-Fi</li>",
  card9:
    "<li>2019</li><li>U/A 13+</li><li>Movie</li><li>Action</li><li>Adventure</li>",
  card10: "<li>2024</li><li>U/A 16+</li><li>Movie</li><li>Dramas</li>",
};
const previewParaText = {
  card1: `When several children disappear at the hands of a serial killer in Sector 36, a corrupt cop is forced to pursue the chilling case at all costs.`,
  card2: `A heroic tax officer puts his life and career on the line to carry out a dangerous raid on a politician suspected of corruption. Based on a true story.`,
  card3: `When a mysterious enemy frames their late captain for corruption, Miami cops Mike and Marcus go rogue to expose a conspiracy — and clear their own names.`,
  card4: `A former Marine confronts corruption in a small town when local law enforcement unjustly seizes the bag of cash he needs to post his cousin's bail.`,
  card5: `When a man comes home between COVID lockdowns, he connects with old friends and falls for a woman who feels influenced by her caste while finding love.`,
  card6: `When fate brings two strangers from different worlds together, they go on an impromptu journey, learning about life and each other along the way.`,
  card7: `The future of those in the dystopian city of Kasi is altered when the destined arrival of Lord Vishnu's final avatar launches a war against darkness.`,
  card8: `When a weather-controlling satellite system suddenly breaks down, a scientist must race against the clock to prevent a climate cataclysm on Earth.`,
  card9: `Sent to England to stop a deadly bio-threat, US agent Luke Hobbs is forced to team up with his nemesis, mercenary Deckard Shaw.`,
  card10: `When his prized possession gets stolen, a barber seeks help from the police, who jeer at his request — until they learn what they're really looking for.`,
};

const renderLightbox = (cardID) => {
  cardList.append(div);
  document.body.style.overflow = `hidden`;
  const previewBg = document.querySelector(".preview-bg");
  previewBg.style.backgroundImage = `url(./img/preview-${cardID}.jpg`;
  previewBg.nextElementSibling.setAttribute(
    "src",
    `./img/preview-${cardID}-title.png`
  );
  const previewList = document.querySelector(".preview-list");
  previewList.innerHTML = previewData[cardID];
  const previewPara = document.querySelector(".preview-para");
  previewPara.innerText = previewParaText[cardID];
  const preview = div.children[0];
  setTimeout(() => {
    div.style.opacity = "1";
    preview.style.transform = "scale(1)";
    preview.style.transitionDelay = "100ms";
    div.style.transitionDelay = "0ms";
  }, 100);
};

const removeLightbox = (e) => {
  const preview = div.children[0];
  div.style.opacity = "0";
  preview.style.transform = "scale(0.95)";
  preview.style.transitionDelay = "0ms";
  div.style.transitionDelay = "100ms";
  setTimeout(() => {
    div.remove();
    document.body.style.removeProperty("overflow");
  }, 500);
};

trendingCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    renderLightbox(card.getAttribute("id"));
  });
});

div.addEventListener("click", (e) => {
  if (e.target.matches(".preview-container")) {
    removeLightbox();
  }
});

const faqItem = document.querySelectorAll(".faq-list li");
const faqAnswer = document.querySelectorAll(".faq-list li div");
const faqItemSvg = document.querySelectorAll(".btn-grey svg");
faqItem.forEach((item, count) => {
  item.addEventListener("click", (e) => {
    faqAnswer[count].classList.toggle('visible');
    faqItemSvg[count].classList.toggle('visible');
  });
});
