import { SKILLLIST, HEADER_LIST, MENU_NAV_ITEM } from "./constants.js";

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
