import {
  SKILLLIST,
  HEADER_LIST,
  MENU_NAV_ITEM,
  LIBRARY,
  timelineData,
  ABOUTME_LIST_IMAGE,
} from "./constants.js";

var skillsList = document.getElementById("skills-content");
var header__logo__item = document.querySelector(".header__logo__item");
var header__logo__item_menu = document.querySelector(
  ".header__logo__item-menu"
);
var menu__items_menuList = document.querySelector(".menu__items-menuList");

skillsList.innerHTML = SKILLLIST.map((item) => {
  return `
    <div class="skills-items">
      <div class="items__top">
        <i class="${item.icon}"></i>
        <img src="${item.image}" alt="${item.alt}" />
      </div>
      <div class="items__bottom">
        <h4>${item.skillName}</h4>
        <ul>
          <li>${item.textDecription}</li>
        </ul>
      </div>
    </div>
    `;
}).join("");

header__logo__item.innerHTML = HEADER_LIST.map((item) => {
  return `
  <div class="logo__item">
    <i class="${item.icon}"></i>
    <div class="item">
      <h6>${item.text}</h6>
      <a href="${item.link}">${item.content}</a>
    </div>
  </div>
  `;
}).join("");

header__logo__item_menu.innerHTML = HEADER_LIST.map((item) => {
  return `
  <div class="logo__item">
    <i class="${item.icon}"></i>
    <div class="item">
      <h6>${item.text}</h6>
      <a href="${item.link}">${item.content}</a>
    </div>
  </div>
  `;
}).join("");

menu__items_menuList.innerHTML = MENU_NAV_ITEM.map((item) => {
  return `
  <li class="active-content">
    <a href="#${item.link}">${item.text}</a>
  </li>
  `;
}).join("");

var timelineList = document.querySelector(".timeline-list");
var contentDisplay = document.getElementById("content-display");
var contentTitle = document.getElementById("content-title");
var contentText = document.getElementById("content-text");
var closeButton = document.getElementById("close-timeline-content");
var linkGithubContent = document.getElementById("linkGithub");
var linkFTPContent = document.getElementById("linkFTP");

closeButton.addEventListener("click", function () {
  contentDisplay.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  timelineData.forEach((item, index) => {
    var li = document.createElement("li");
    li.className = "shadow-md rounded";
    li.innerHTML = `<span class="block text-gray-500">${new Date(
      item.date
    ).toDateString()}</span>
                      <h3 class="mt-2 text-lg font-semibold">${item.title}</h3>
                      <p>Click for more informations <i class="fa fa-arrow-right"></i> </p>
                      `;
    li.dataset.index = index;
    timelineList.appendChild(li);
  });

  timelineList.addEventListener("click", function (e) {
    var target = e.target.closest("li");

    if (target) {
      var index = target.dataset.index;
      var selectedItem = timelineData[index];

      contentTitle.textContent = selectedItem.title;
      contentText.textContent = selectedItem.content;
      linkGithubContent.textContent = `Link Github : ${selectedItem.linkGithub}`;
      linkGithubContent.href = selectedItem.linkGithub;
      linkFTPContent.textContent = `Link FTP : ${selectedItem.linkFTP}`;
      linkFTPContent.href = selectedItem.linkFTP;

      if (selectedItem.image !== "") {
        var timeline_image = document.getElementById("timeline-image");
        timeline_image.className = "timeline-image";
        timeline_image.src = selectedItem.image;
        timeline_image.alt = selectedItem.title;
      }
      contentDisplay.classList.remove("hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var slidesContainer = document.getElementById("slides-2");
  var currentIndex = 0;

  LIBRARY.forEach(function (item) {
    var slide = document.createElement("div");
    var caption = document.createElement("p");
    var img = document.createElement("img");

    slide.className = "slide-library";

    caption.className = "slide-caption-library";
    caption.textContent = item.caption;
    img.src = item.image;

    slide.appendChild(img);
    slide.appendChild(caption);
    slidesContainer.appendChild(slide);
  });

  var totalSlides = LIBRARY.length;
  var slideWidth = 100 / 3;

  var prevButton = document.querySelector(".prev-library");
  var nextButton = document.querySelector(".next-library");

  prevButton.addEventListener("click", function () {
    moveSlide(-1);
  });

  nextButton.addEventListener("click", function () {
    moveSlide(1);
  });

  function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 3;
    } else if (currentIndex >= totalSlides - 2) {
      currentIndex = 0;
    }

    slidesContainer.style.transform =
      "translateX(" + -currentIndex * slideWidth + "%)";
  }
});


document.addEventListener("DOMContentLoaded", function () {
  var slidesContainer = document.querySelector(".slides-aboutMe");
  var prevButton = document.querySelector(".prev-aboutMe");
  var nextButton = document.querySelector(".next-aboutMe");
  var slides = document.querySelectorAll(".slide");
  var currentIndex = 0;

  ABOUTME_LIST_IMAGE.forEach(function (item) {
      var slide = document.createElement("div");
      var img = document.createElement("img");
      
      slide.className = "slide";
      img.src = item.image;
      img.alt = item.alt;

      slide.appendChild(img);
      slidesContainer.appendChild(slide);
  });

  prevButton.addEventListener("click", function () {
      changeSlide(-1);
  });

  nextButton.addEventListener("click", function () {
      changeSlide(1);
  });

  function changeSlide(step) {
      currentIndex += step;

      if (currentIndex >= slides.length) {
          currentIndex = 0;
      } else if (currentIndex < 0) {
          currentIndex = slides.length - 1;
      }

      var offset = -currentIndex * 100;
      slidesContainer.style.transform = `translateX(${offset}%)`;
  }
});
