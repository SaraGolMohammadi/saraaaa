document.addEventListener("DOMContentLoaded", function () {
  // ----- منوی همبرگری -----
  const showMoreMenu = document.getElementById("show-more-menu"); //این id li
  const hamburgerMenu = document.querySelector(".hamburger-menu"); // ماا ul

  showMoreMenu.addEventListener("mouseenter", function () {
    hamburgerMenu.style.display = "block";
    hamburgerMenu.style.opacity = "1";
    hamburgerMenu.style.animation = "fadeIn 0.3s ease-in-out";
  });

  showMoreMenu.addEventListener("mouseleave", function () {
    hamburgerMenu.style.opacity = "0";
    setTimeout(() => {
      hamburgerMenu.style.display = "none";
    }, 300);
  });

  // ----- اسلایدر -----
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slider img");
  const indicators = document.querySelectorAll(".indicators li");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    indicators.forEach((dot) => dot.classList.remove("active"));
    slides[index].classList.add("active");
    indicators[index].classList.add("active");
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
    resetSlideInterval();
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
    resetSlideInterval();
  }

  function goToSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
    resetSlideInterval();
  }

  let slideInterval = setInterval(nextSlide, 3000);

  function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
  }

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  }

  showSlide(slideIndex);
 
  var swiper1 = new Swiper(".slider1", {
    loop: false,
    spaceBetween: -10,
    slidesPerView: 6, // تعداد اسلایدها در حالت پیش‌فرض
    navigation: {
      nextEl: ".slider1-next",
      prevEl: ".slider1-prev",
    },
    breakpoints: {
  
      1200: {
        slidesPerView: 5, // تعداد اسلایدها را به 5 تغییر می‌دهیم
      },
      // برای صفحه‌نمایش‌هایی که عرض آن‌ها از 992px کمتر است
      992: {
        slidesPerView: 4, // تعداد اسلایدها را به 4 تغییر می‌دهیم
      },
      // برای صفحه‌نمایش‌هایی که عرض آن‌ها از 768px کمتر است
      768: {
        slidesPerView: 5, // تعداد اسلایدها را به 3 تغییر می‌دهیم
      },
      // برای صفحه‌نمایش‌هایی که عرض آن‌ها از 576px کمتر است
      320: {
        slidesPerView: 4, // تعداد اسلایدها را به 2 تغییر می‌دهیم
      },
     
    },
  });
  
  

  var swiper2 = new Swiper(".slider2", {
    loop:true,
    spaceBetween: 10,
    slidesPerView: 5,
    navigation: {
        nextEl: ".slider2-next",
        prevEl: ".slider2-prev",
    },
    breakpoints: {
  
      1200: {
        slidesPerView: 5, // تعداد اسلایدها را به 5 تغییر می‌دهیم
      },
      // برای صفحه‌نمایش‌هایی که عرض آن‌ها از 992px کمتر است
      992: {
        slidesPerView: 4, // تعداد اسلایدها را به 4 تغییر می‌دهیم
      },
      // برای صفحه‌نمایش‌هایی که عرض آن‌ها از 768px کمتر است
      768: {
        slidesPerView: 5, // تعداد اسلایدها را به 3 تغییر می‌دهیم
      },
      // برای صفحه‌نمایش‌هایی که عرض آن‌ها از 576px کمتر است
      600: {
        slidesPerView: 4, // تعداد اسلایدها را به 2 تغییر می‌دهیم
      },
      320: {
        slidesPerView: 2, // تعداد اسلایدها را به 2 تغییر می‌دهیم
      },
     
    },
    
  });

  var swiper2 = new Swiper(".slider3", {
    loop:true,
    spaceBetween: 20,
    slidesPerView: 4,
    navigation: {
        nextEl: ".slider2-next",
        prevEl: ".slider2-prev",
    },

    breakpoints: {
  
      1200: {
        slidesPerView: 5, // تعداد اسلایدها را به 5 تغییر می‌دهیم
      },
      // برای صفحه‌نمایش‌هایی که عرض آن‌ها از 992px کمتر است
      992: {
        slidesPerView: 4, // تعداد اسلایدها را به 4 تغییر می‌دهیم
      },
      // برای صفحه‌نمایش‌هایی که عرض آن‌ها از 768px کمتر است
      768: {
        slidesPerView: 3, // تعداد اسلایدها را به 3 تغییر می‌دهیم
      },
      // برای صفحه‌نمایش‌هایی که عرض آن‌ها از 576px کمتر است
      600: {
        slidesPerView: 3, // تعداد اسلایدها را به 2 تغییر می‌دهیم
      },
      320:{
        slidesPerView: 2,
      },
     
    },
  });
  var swiper1 = new Swiper(".swiper4", {
    loop: false,
    spaceBetween: -10,
    slidesPerView: 6, // تعداد اسلایدها در حالت پیش‌فرض
    navigation: {
      nextEl: ".slider1-next",
      prevEl: ".slider1-prev",
    },
    breakpoints: {
  
      1200: {
        slidesPerView: 5, // تعداد اسلایدها را به 5 تغییر می‌دهیم
      },
      // برای صفحه‌نمایش‌هایی که عرض آن‌ها از 992px کمتر است
      992: {
        slidesPerView: 4, // تعداد اسلایدها را به 4 تغییر می‌دهیم
      },
      // برای صفحه‌نمایش‌هایی که عرض آن‌ها از 768px کمتر است
      768: {
        slidesPerView: 3, // تعداد اسلایدها را به 3 تغییر می‌دهیم
      },
      // برای صفحه‌نمایش‌هایی که عرض آن‌ها از 576px کمتر است
      600: {
        slidesPerView: 3, // تعداد اسلایدها را به 2 تغییر می‌دهیم
      },
      320: {
        slidesPerView: 2, // تعداد اسلایدها را به 2 تغییر می‌دهیم
      },
     
    },
  });

});


 
