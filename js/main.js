
$(".tabs__link1").click(function () {
  $(".about-product__wrap").removeClass("tabs-notactive");
  $(".supplier-txt").removeClass("tabs-notactive");
  $(".filter").removeClass("tabs-notactive");
  $(".table").removeClass("tabs-notactive");
  $(".maker").removeClass("tabs-notactive");
  $(".description").removeClass("tabs-active");
  $(".property").removeClass("property-active");
  $(".tabs__link2").removeClass("tabs__link-active");
  $(".tabs__link3").removeClass("tabs__link-active");
  $(".tabs__link1").addClass("tabs__link-active");
  
});
$(".tabs__link2").click(function () {
  $(".about-product__wrap").addClass("tabs-notactive");
  $(".supplier-txt").addClass("tabs-notactive");
  $(".filter").addClass("tabs-notactive");
  $(".table").addClass("tabs-notactive");
  $(".maker").addClass("tabs-notactive");
  $(".description").addClass("tabs-active");
  $(".property").removeClass("property-active");
  $(".tabs__link2").addClass("tabs__link-active");
  $(".tabs__link1").removeClass("tabs__link-active");
  $(".tabs__link3").removeClass("tabs__link-active");


});
$(".tabs__link3").click(function () {
  $(".about-product__wrap").addClass("tabs-notactive");
  $(".supplier-txt").addClass("tabs-notactive");
  $(".filter").addClass("tabs-notactive");
  $(".table").addClass("tabs-notactive");
  $(".maker").addClass("tabs-notactive");
  $(".description").removeClass("tabs-active");
  $(".property").addClass("property-active");
  $(".tabs__link1").removeClass("tabs__link1-active");
  $(".tabs__link2").removeClass("tabs__link-active");
  $(".tabs__link1").removeClass("tabs__link-active");
  $(".tabs__link3").addClass("tabs__link-active");
  
});



// Page 3

$(".folder__name").click(function () {
  $("#transfotm").toggleClass("folder__wrap-active");
  $(".folder__name-plus").toggleClass("plus-remove");
  $(".folder__name-minus").toggleClass("minus-active");
});
// Folder
$("#lighting").click(function () {
  $(".light__wrap").toggleClass("light__wrap-active");
  $(".light__name-plus").toggleClass("plus-remove");
  $(".light__name-minus").toggleClass("minus-active");
});
// light
$("#cable").click(function () {
  $(".cable__wrap").toggleClass("cable__wrap-active");
  $(".cable__name-plus").toggleClass("plus-remove");
  $(".cable__name-minus").toggleClass("minus-active");
});
// Cable
$("#heating").click(function () {
  $(".heating__wrap").toggleClass("heating__wrap-active");
  $(".heating__name-plus").toggleClass("plus-remove");
  $(".heating__name-minus").toggleClass("minus-active");
});
// Heating
$("#shields").click(function () {
  $(".shields__wrap").toggleClass("shields__wrap-active");
  $(".shields__name-plus").toggleClass("plus-remove");
  $(".shields__name-minus").toggleClass("minus-active");
});
// shields
$("#device").click(function () {
  $(".device__wrap").toggleClass("device__wrap-active");
  $(".device__name-plus").toggleClass("plus-remove");
  $(".device__name-minus").toggleClass("minus-active");
});
// device
$("#tooling").click(function () {
  $(".tooling__wrap").toggleClass("tooling__wrap-active");
  $(".tooling__name-plus").toggleClass("plus-remove");
  $(".tooling__name-minus").toggleClass("minus-active");
});
// tooling
// folder__button
$(".folder__btn").click(function () {
  $(".cover").toggleClass("cover-active");
});
$(".keep__btn").click(function () {
  $(".cover").removeClass("cover-active");
});

// Catalog-transformers-current-transformers
// Catalog__link
$("#catolog__btn").click(function () {
  $("#btn__remove").toggleClass("catalog__btn-remove");
  $("#catalog__wrap-avtive").toggleClass("catalog__wrap-active");
});
$("#catolog__btn").click(function () {
  $("#btn__active").toggleClass("catalog__btn-active");
});

// Catalog-transformers-current-transformers
// Catalog__link
$("#catolog__button").click(function () {
  $("#button__remove").toggleClass("catalog__btn-remove");
  $("#wrap__active").toggleClass("catalog__wrap-active");
});
$("#catolog__button").click(function () {
  $("#button__active").toggleClass("catalog__btn-active");
});

$("#filter__link-btn").click(function () {
  $(".filter__up").toggleClass("filter__up-active");
  $(".filter__media-icon").toggleClass("filter__media-icon-active");
});
$(".logo__headerr").click(function () {
  $(".headerr__minmenu-wrap").addClass("active");
});



$(".variety__all-link").click(function () {
  $(".variety__selectbox").toggleClass("variety__selectbox-active");
});

$("#left__block-active").click(function () {
  $(".variety__left-remove").toggleClass("variety__left-act");
  $(".variety__left__icon").toggleClass("variety__left__icon-r");
  $(".variety__left-list").removeClass("variety__left-list-remove");
   $(".variety__left-btn").removeClass("variety__left-btn-remove");
   $(".variety__left-btn2").removeClass("variety__left-btn-active");
});

$("#actbtn").click(function () {
  $(".variety__left-list").toggleClass("variety__left-list-remove");
  $(".variety__left-btn").toggleClass("variety__left-btn-remove");
  $(".variety__left-btn2").addClass("variety__left-btn-active");
});
$("#still").click(function () {
  $(".variety__left-btn2").removeClass("variety__left-btn-active");
  $(".variety__left-btn").toggleClass("variety__left-btn-remove");
  $(".variety__left-list").removeClass("variety__left-list-remove");
});

$("#left__block-active2").click(function () {
  $(".variety__left-remove1").toggleClass("variety__left-act");
  $(".variety__left__icon1").toggleClass("variety__left__icon-r");
  $(".variety__left-list1").removeClass("variety__left-list-remove");
  $(".variety__left-btn3").removeClass("variety__left-btn-remove");
  $(".variety__left-btn4").removeClass("variety__left-btn-active");
});

$("#actbtn1").click(function () {
  $(".variety__left-list1").toggleClass("variety__left-list-remove");
  $(".variety__left-btn3").toggleClass("variety__left-btn-remove");
  $(".variety__left-btn4").addClass("variety__left-btn-active");
});
$("#still1").click(function () {
  $(".variety__left-btn4").removeClass("variety__left-btn-active");
  $(".variety__left-btn3").toggleClass("variety__left-btn-remove");
  $(".variety__left-list1").removeClass("variety__left-list-remove");
});

$("#filter__active").click(function (e) {
  if ($(this).find("input").prop("checked")) {
    $(".filter-region-remove1").addClass("filter__reg-active");
    $(".filter-region-remove3").addClass("filter__reg-active");
    $(".filter-region-remove2").addClass("filter__reg-active");
    $(".filter__minus").addClass("filter__minus-remove");
    $(".filter__plus").addClass("filter__plus-active");
  } else {
    $(".filter-region-remove1").removeClass("filter__reg-active");
    $(".filter__minus").removeClass("filter__minus-remove");
    $(".filter__plus").removeClass("filter__plus-active");
  }
});


$("#filter-region-act1").click(function (e) {
  if ($(this).find("input").prop("checked")) {
    $(".filter__minus1").addClass("filter__minus-remove");
    $(".filter__plus1").addClass("filter__plus-active");
  } else {
    $(".filter__minus1").removeClass("filter__minus-remove");
    $(".filter__plus1").removeClass("filter__plus-active");
  }
});

$("#filter-region-act2").click(function (e) {
  if ($(this).find("input").prop("checked")) {
    $(".filter__minus2").addClass("filter__minus-remove");
    $(".filter__plus2").addClass("filter__plus-active");
  } else {
    $(".filter__minus2").removeClass("filter__minus-remove");
    $(".filter__plus2").removeClass("filter__plus-active");
  }
});

$("#filter-region-act3").click(function (e) {
  if ($(this).find("input").prop("checked")) {
    $(".filter__minus3").addClass("filter__minus-remove");
    $(".filter__plus3").addClass("filter__plus-active");
  } else {
    $(".filter__minus3").removeClass("filter__minus-remove");
    $(".filter__plus3").removeClass("filter__plus-active");
  }
});

$("#filter-region-act4").click(function (e) {
  if ($(this).find("input").prop("checked")) {
    $(".filter__minus4").addClass("filter__minus-remove");
    $(".filter__plus4").addClass("filter__plus-active");
  } else {
    $(".filter__minus4").removeClass("filter__minus-remove");
    $(".filter__plus4").removeClass("filter__plus-active");
  }
});

$("#filter-region-act5").click(function (e) {
  if ($(this).find("input").prop("checked")) {
    $(".filter__minus5").addClass("filter__minus-remove");
    $(".filter__plus5").addClass("filter__plus-active");
  } else {
    $(".filter__minus5").removeClass("filter__minus-remove");
    $(".filter__plus5").removeClass("filter__plus-active");
  }
});

$("#filter-region-act6").click(function (e) {
  if ($(this).find("input").prop("checked")) {
    $(".filter__minus6").addClass("filter__minus-remove");
    $(".filter__plus6").addClass("filter__plus-active");
  } else {
    $(".filter__minus6").removeClass("filter__minus-remove");
    $(".filter__plus6").removeClass("filter__plus-active");
  }
});

$(".filter__active2").click(function (e) {
  if ($(this).find("input").prop("checked")) {
    $(".filter-region-remove2").addClass("filter__reg-active");
    $(".filter-region-remove3").addClass("filter__reg-active");
  } else {
    $(".filter-region-remove2").removeClass("filter__reg-active");
  }
});

$(".filter__active3").click(function (e) {
  if ($(this).find("input").prop("checked")) {
    $(".filter-region-remove3").addClass("filter__reg-active");
  } else {
    $(".filter-region-remove3").removeClass("filter__reg-active");
  }
});


$("#find-name-active").click(function () {
  $(".find-product__link-selectbox1").toggleClass(
    "find-product__link-selectbox--visible"
  );
});
$("#find-name-active1").click(function () {
  $(".find-product__link-selectbox2").toggleClass(
    "find-product__link-selectbox--visible"
  );
});
$("#find-name-active2").click(function () {
  $(".find-product__link-selectbox3").toggleClass(
    "find-product__link-selectbox--visible"
  );
});
$("#find-product__input1").click(function () {
  $(".find-product__link-input-selectbox1").toggleClass(
    "find-product__link-input-selectbox--visible"
  );
});
$("#find-product__input").click(function () {
  $(".find-product__link-input-selectbox2").toggleClass(
    "find-product__link-input-selectbox--visible"
  );
});



let headerCategory = document.querySelector(".header__category");
let menu = document.querySelector(".header__minmenu-wrap");
headerCategory.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.toggle("active");
});
$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".header__category").length === 0) {
    $(".header__minmenu-wrap").removeClass("active");
  }
});

let headerLogin = document.querySelector(".header__login");
let cardMenu = document.querySelector(".header__card-minmenu");

headerLogin.addEventListener("click", function (event) {
  event.preventDefault();
  cardMenu.classList.toggle("activ");
});
$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".header__login").length === 0) {
    $(".header__card-minmenu").removeClass("activ");
  }
});


$(".filter__location-input").click(function () {
  $(".filter-select__box").toggleClass("filter-select-active");
   $(".filter-region-remove1").removeClass("filter__reg-active");
   $(".filter-region-remove3").removeClass("filter__reg-active");
   $(".filter-region-remove2").removeClass("filter__reg-active");
   $(".provider-select__box").removeClass("provider-select__box-active");
});
$("#provider__search").click(function () {
  $(".provider-select__box").toggleClass("provider-select__box-active");
  $(".filter-select__box").removeClass("filter-select-active");
});

// Проверяем на клик вне элемента 
  


let filterLocation = document.querySelector(".filter__location-input");
let filterSelect = document.querySelector(".filter-select__box");

filterLocation.addEventListener("click", function (event) {
  event.preventDefault();
  filterSelect.classList.toggleClass("filter-select-active");
});
document.addEventListener("click", (event) => {
  let t = event.target;
  if (filterSelect.contains(t)) {
    return;
  }
  filterSelect.classList.removeClass("filter-select-active");
});

let payLocation = document.querySelector(".filter__pay-input");
let paySelect = document.querySelector(".pay-select__box");

payLocation.addEventListener("click", function (event) {
  event.preventDefault();
  paySelect.classList.toggle("pay__select-active");
});
$(document).mouseup(function (e) {
  var $target = $(e.target);
  if ($target.closest(".filter__pay-input").length === 0) {
    $(".pay-select__box").removeClass("pay__select-active");
  }
});

$(document).ready(function () {
  $(".filter__price-input").mask("000.000.000", { reverse: true });
  $(".filter__lot-input").mask("000.000.000", { reverse: true });
});







