document.addEventListener(`DOMContentLoaded`, function () {
  // ----------------------- 헤더 -----------------------
  window.addEventListener(`wheel`, (event) => {
    const headerArea = document.querySelector(`.header_area`);

    if (event.deltaY > 0) {
      headerArea.classList.remove(`scroll`);
    } else {
      headerArea.classList.add(`scroll`);
    }
  });
  // ----------------------- 메뉴 -----------------------
  document.querySelectorAll(".left1").forEach((item) => {
    item.addEventListener("click", () => {
      const nextMenu = item.nextElementSibling.querySelector("ul");

      if (!nextMenu) return;

      // 현재 메뉴가 열려있는지 확인
      const isOpen = nextMenu.classList.contains("open");

      // 모든 하위 메뉴 닫기
      document
        .querySelectorAll(".submenu_shop_box, .submenu_community_box")
        .forEach((submenu) => submenu.classList.remove("open"));

      // 열려있지 않았으면 현재 메뉴 열기 (토글)
      if (!isOpen) {
        nextMenu.classList.add("open");
      }
    });
  });
  // + 아이콘 변경
  const icons = document.querySelectorAll(".icon");
  icons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.preventDefault();

      // 만약 클릭한 아이콘이 이미 active면 active 제거 (토글)
      if (icon.classList.contains("active")) {
        icon.classList.remove("active");
      } else {
        // 모든 아이콘에서 active 제거
        icons.forEach((i) => i.classList.remove("active"));
        // 클릭한 아이콘만 active 추가
        icon.classList.add("active");
      }
    });
  });
  // ----------------------- 카테고리 드롭다운 -----------------------
  const categoryBtn = document.querySelector(`.all_category_btn`);
  const categoryBox = document.querySelector(`.all_category_box`);
  const arrowBtn = categoryBtn.querySelector(`svg`);
  const resetBtn = document.querySelector(`.reset-btn`);

  // 전체 카테고리 드롭다운 열고 닫기
  categoryBtn.addEventListener(`click`, () => {
    categoryBox.classList.toggle(`active`);
    arrowBtn.style.transform = categoryBox.classList.contains(`active`)
      ? `rotate(180deg)`
      : `rotate(0deg)`;
  });

  // 외부 클릭 시 닫기
  document.addEventListener(`click`, (e) => {
    if (!categoryBtn.contains(e.target) && !categoryBox.contains(e.target)) {
      categoryBox.classList.remove(`active`);
      arrowBtn.style.transform = `rotate(0deg)`;
    }
  });

  // 초기화 버튼
  resetBtn.addEventListener(`click`, () => {
    document.querySelector(`#all`).checked = true;
  });

  const starCategoryBtn = document.querySelector(`.star_category_btn`);
  const starCategoryBox = document.querySelector(`.star_category_box`);
  const arrowBtns = starCategoryBtn.querySelector(`svg`);

  // 별점 카테고리 드롭다운 열고 닫기
  starCategoryBtn.addEventListener(`click`, () => {
    starCategoryBox.classList.toggle(`active`);
    arrowBtns.style.transform = starCategoryBox.classList.contains(`active`)
      ? `rotate(180deg)`
      : `rotate(0deg)`;
  });
  // 외부 클릭 시 닫기
  document.addEventListener(`click`, (e) => {
    if (
      !starCategoryBtn.contains(e.target) &&
      !starCategoryBox.contains(e.target)
    ) {
      starCategoryBox.classList.remove(`active`);
      arrowBtns.style.transform = `rotate(0deg)`;
    }
  });
  // ----------------------- 스와이퍼-----------------------//
  var swiper = new Swiper(`.mySwiper`, {
    direction: "vertical",
    loop: true,
    slidesPerView: 3,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: `.swiper-pagination`,
    },
  });

  // 첫번쨰 슬라이드
  var swiper = new Swiper(`.firstSwiper`, {
    loop: true,
    autoplay: {
      delete: 3500,
    },
    pagination: {
      el: `.swiper-pagination`,
      clickable: true,
    },
    breakpoints: {
      1700: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1160: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      760: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });
  // 두번째 슬라이드
  var swiper = new Swiper(`.secondSwiper`, {
    loop: true,
    autoplay: {
      delete: 4000,
    },
    pagination: {
      el: `.swiper-pagination`,
      clickable: true,
    },
    breakpoints: {
      1700: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1160: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      760: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });
  // 햄버거버튼
  const hamburger = document.querySelector(`#hamburger`);
  const menu = document.querySelector(`.banner .left_menu_box`);

  hamburger.addEventListener(`click`, function () {
    menu.classList.toggle(`click`);
  });
});
