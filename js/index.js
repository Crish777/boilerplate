let burger,
  closeBurger,
  siteMenu,
  topDropDown,
  linkInnerDoprDown,
  innerDopDownMenu,
  filterItem,
  filterSection,
  contactSection,
  filterProducts;

window.addEventListener("DOMContentLoaded", () => {
  createVars();
  setListeners();
  resize();
  createSlicks();
  removeSticky();
});

const createVars = () => {
  burger = document.querySelector(".burger");
  closeBurger = document.querySelector(".close.burger");
  siteMenu = document.getElementById("siteMenu");
  topDropDown = document.querySelector(".topDropDown");
  linkInnerDoprDown = document.querySelector(".linkInnerDoprDown");
  innerDopDownMenu = document.querySelectorAll(".innerDopDownMenu");
  filterItem = document.querySelectorAll(".filterItem");
  filterSection = document.querySelector(".filterSection");
  filterProducts = document.querySelector(".filterProducts");
  contactSection = document.querySelector(".contactSection");
};

const setListeners = () => {
  burger.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    siteMenu.classList.add("active");
  });
  closeBurger.addEventListener("click", () => {
    document.body.style.overflow = null;
    siteMenu.classList.remove("active");
  });
  topDropDown.addEventListener("click", (e) => {
    e.target.closest(".groupInneMenu").classList.toggle("activeDrop");
  });

  filterItem.forEach((item) => {
    item.addEventListener("click", () => {
      filterItem.forEach((e) => {
        if (e.classList.contains("active")) e.classList.remove("active");
        item.classList.add("active");
      });
    });
  });

  window.addEventListener("scroll", () => {
    if (filterSection) {
      // let filterProductsHeight = filterProducts.offsetHeight;
      if (contactSection.getBoundingClientRect().top <= 75) {
        filterSection.style.position = "initial";
      } else {
        filterSection.style.position = "sticky";
      }
    }
  });

  $(".filterItem").click(function () {
    var dataItemScroll = $(this).attr("data-sec");
    $("html, body").animate(
      {
        scrollTop: $(`#${dataItemScroll}`).offset().top - 100,
      },
      1000
    );
  });

  if (filterSection)
    filterSection.style.marginBottom = -filterSection.offsetHeight + "px";
};

const createSlicks = () => {
  $(".wrapperSlickHero").slick({
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".prevSlick"),
    nextArrow: $(".nextSlick"),
  });
};

const setHeightDropDowns = (parent) => {
  const iterableChidrenDrop = Array.from(parent.children);
  let maxHeight = 0;
  iterableChidrenDrop.forEach((child) => {
    const completeHeight = $(child).outerHeight(true);
    maxHeight += completeHeight;
  });
  parent.setAttribute("style", `--height:${maxHeight}px;`);
};

const removeSticky = () => {
  if (filterSection) {
  }
};

const resize = () => {
  // setHeightDropDowns(innerDopDownMenu);
  innerDopDownMenu.forEach((dropdown) => {
    setHeightDropDowns(dropdown);
  });
};

window.onorientationchange = resize;
