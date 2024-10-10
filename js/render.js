import {
  SKILLLIST,
  HEADER_LIST,
  MENU_NAV_ITEM,
  LIBRARY,
  timelineData,
  ABOUTME_LIST_IMAGE,
  MY_PROJECT,
  CONTACT_DATA,
} from "./constants.js";

var skillsList = document.getElementById("skills-content");
var header__logo__item = document.querySelector(".header__logo__item");
var header__logo__item_menu = document.querySelector(
  ".header__logo__item-menu"
);
var menu__items_menuList = document.querySelector(".menu__items-menuList");
var contact__content = document.querySelector(".contact__content");

contact__content.innerHTML = CONTACT_DATA.map((item) => {
  return `  
  <div class="contact__item">
  <i class="${item.icon}"></i>
  <a target="${item.target ? item.target : ""}" href="${item.href}">${
    item.text
  }</a>
</div>

  `;
}).join("");

skillsList.innerHTML = SKILLLIST.map((item) => {
  return `
    <div class="skills-items">
      <div class="items__top">
        <i class="${item.icon}"></i>
        <img src="${item.image}" alt="${item.alt}" />
      </div>
      <div class="items__bottom">
        <h4>${item.skillName}</h4>
        <p>${item.textDecription}</p>
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

document.addEventListener("click", function (e) {
  if (!contentDisplay.contains(e.target) && !e.target.closest("li")) {
    contentDisplay.classList.add("hidden");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  timelineData.forEach(function (item, index) {
    var li = document.createElement("li");
    li.className = "timeline-item shadow-md rounded opacity-0 translate-y-10";
    li.innerHTML = `<span>${new Date(item.date).toDateString()}</span>
                    <h3>${item.title}</h3>
                    <p>Click for more informations <i class="fa fa-arrow-right"></i></p>`;
    li.dataset.index = index;
    timelineList.appendChild(li);
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  });

  var timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach(function (item) {
    observer.observe(item);
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
  setInterval(function () {
    moveSlide(1);
  }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
  var slidesContainer = document.querySelector(".slides-aboutMe");
  var prevButton = document.querySelector(".prev-aboutMe");
  var nextButton = document.querySelector(".next-aboutMe");
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

  ABOUTME_LIST_IMAGE.forEach(function (item) {
    var slide = document.createElement("div");
    var img = document.createElement("img");

    slide.className = "slide";
    img.src = item.image;
    img.alt = item.alt;

    slide.appendChild(img);
    slidesContainer.appendChild(slide);
  });

  var slides = document.querySelectorAll(".slide");

  function changeSlide(step) {
    currentIndex += step;

    if (currentIndex >= slides.length / 2) {
      currentIndex = 0;
      slidesContainer.style.transition = "none";
      slidesContainer.style.transform = `translateX(0%)`;
      setTimeout(function () {
        slidesContainer.style.transition = "transform 0.5s ease";
        currentIndex++;
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      }, 100);
    } else if (currentIndex < 0) {
      currentIndex = slides.length / 2 - 1;
      slidesContainer.style.transition = "none";
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      setTimeout(function () {
        slidesContainer.style.transition = "transform 0.5s ease";
        currentIndex--;
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      }, 100);
    } else {
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }

  prevButton.addEventListener("click", function () {
    changeSlide(-1);
  });

  nextButton.addEventListener("click", function () {
    changeSlide(1);
  });

  setInterval(function () {
    changeSlide(1);
  }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
  var containerProject = document.querySelector(".my-project-content");

  MY_PROJECT.forEach(function (item) {
    var project_items = document.createElement("div");
    var project_items_modal = document.createElement("div");
    var project_items_img = document.createElement("img");

    project_items.className = "project-items";
    project_items_modal.className = "project-items-modal";
    project_items_img.className = "project-items_img";
    project_items_modal.textContent = item.text;
    project_items_img.src = item.image;

    project_items.appendChild(project_items_modal);
    project_items.appendChild(project_items_img);
    containerProject.appendChild(project_items);
  });
});
