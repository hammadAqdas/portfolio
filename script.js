const circularProgress = document.querySelectorAll(".circular-progress");
//progress bar........

// function progressLoader(sp) {
//   Array.from(circularProgress).forEach((progressBar) => {
//     const progressValue = progressBar.querySelector(".percentage");
//     const innerCircle = progressBar.querySelector(".inner-circle");
//     let startValue = 0,
//       endValue = Number(progressBar.getAttribute("data-percentage")),
//       speed = `${sp}`,
//       progressColor = progressBar.getAttribute("data-progress-color");

//     const progress = setInterval(() => {
//       startValue++;
//       progressValue.textContent = `${startValue}%`;
//       progressValue.style.color = `${progressColor}`;

//       innerCircle.style.backgroundColor = `${progressBar.getAttribute(
//         "data-inner-circle-color"
//       )}`;

//       progressBar.style.background = `conic-gradient(${progressColor} ${
//         startValue * 3.6
//       }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
//       if (startValue === endValue) {
//         clearInterval(progress);
//       }
//     }, speed);
//   });
// }

function progressLoader(sp, elem) {
  const progressValue = elem.querySelector(".percentage");
  const innerCircle = elem.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(elem.getAttribute("data-percentage")),
    speed = `${sp}`,
    progressColor = elem.classList.contains("inner-circle--mode")
      ? elem.getAttribute("data-progress-color-lb")
      : elem.getAttribute("data-progress-color-db");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${
      elem.classList.contains("inner-circle--mode")
        ? elem.getAttribute("data-inner-circle-color-lb")
        : elem.getAttribute("data-inner-circle-color-db")
    }`;

    elem.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
      //data-bg-color-db
    }deg,${
      elem.classList.contains("inner-circle--mode")
        ? elem.getAttribute("data-bg-color-lb")
        : elem.getAttribute("data-bg-color-db")
    } 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
}

//bar loading....

const loadBar = function (color) {
  const bars = document.querySelectorAll(".bar");
  bars.forEach((bar) => {
    const w = bar.getBoundingClientRect().width;
    const percent = Number(bar.getAttribute("data-percentage"));
    bar.style.boxShadow = `inset ${(percent / 100) * w}px 0 0 #${color}`;
  });
};
//serviecs tabs..
const service = document.querySelectorAll(".service");

service.forEach((s) => {
  s.addEventListener("mouseover", function () {
    const w = s.getBoundingClientRect().width;

    s.style.boxShadow = `inset ${w}px 0 0  #ff6b00`;
  });
});
service.forEach((s) => {
  s.addEventListener("mouseout", function () {
    s.style.boxShadow = `inset 0 0 0  #ff6b00`;
  });
});

// const services = document.querySelectorAll(".service");

// const serviceObj = {
//   root: null,
//   threshold: 1,
// };
// const serviceCall = function (entries, observer) {
//   entries.forEach((entry) => {
//     const w = entry.target.getBoundingClientRect().width;
//     entry.target.style.boxShadow = `inset ${w}px 0 0  #ff6b00`;
//     if (entry.isIntersecting) {
//       entry.target.style.boxShadow = `inset 0 0 0  #ff6b00`;
//     } else return;
//   });
// };

// const serviceObserver = new IntersectionObserver(serviceCall, serviceObj);
// services.forEach((el) => {
//   serviceObserver.observe(el);
// });

//svg--menu...
const menu = document.querySelector(".svg-menu");
menu.addEventListener("click", function () {
  const sidebar_content = document.querySelector(".sidebar__content");

  sidebar_content.classList.toggle("sidebar__content--effect");
  document.querySelector(".smenu").classList.toggle("smenu--effect");
  document.querySelector(".cmenu").classList.toggle("cmenu--effect");
});

//skilss loading intersection .....
const skills = document.querySelectorAll(".circular-progress");
const skillCall = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      progressLoader(8, entry.target);
    } else {
      return;
    }
  });
};
const skillObj = {
  root: null,
  thresgold: 1,
};
const skillsObserver = new IntersectionObserver(skillCall, skillObj);
skills.forEach((skill) => {
  skillsObserver.observe(skill);
});

const bars = document.querySelector(".language-bars");
const langObj = {
  root: null,
  threshold: 1,
};
const langCall = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    if (entry.target.classList.contains("light")) loadBar("191414");
    else loadBar("d1d0d0");
  }
};
const languageObserver = new IntersectionObserver(langCall, langObj);
languageObserver.observe(bars);

const gotos = document.querySelectorAll(".goto");
console.log(gotos);
gotos.forEach((goto) => {
  goto.addEventListener("click", function () {
    const target = document.querySelector(
      `.${this.getAttribute("data-section")}`
    );
    target.scrollIntoView({ behavior: "smooth" });
  });
});

//lightmode and dark mode.....

function allElementOfLightMode() {
  //
  const rootElem = document.querySelector("body");
  const nav = document.querySelector("nav");
  rootElem.classList.toggle("body--mode");
  nav.classList.toggle("nav--mode");
  document
    .querySelector(".header__toggle")
    .classList.toggle("header__toggle--mode");
  document
    .querySelector(".header__links")
    .classList.toggle("header__links--mode");
  document
    .querySelectorAll(".circular-progress")
    .forEach((el) => el.classList.toggle("inner-circle--mode"));

  document
    .querySelectorAll(".bar")
    .forEach((e) => e.classList.toggle("bar--mode"));
  document.querySelector(".language-bars").classList.toggle("light");
  document
    .querySelectorAll(".footer-svg")
    .forEach((el) => el.classList.toggle("footer-svg--mode"));
  const arr = [
    [".hero", "hero--mode"],
    [".hero__paragraph", "hero__paragraph--mode"],
    [".hero__tiny-img", "hero__tiny-img--mode"],
    [".hero__social-media-links", "hero__social-media-links--mode"],
    [".lb", "lb--mode"],
    [".author", "author--mode"],
    [".language-contact", "language-contact--mode"],
    [".language__details", "language__details--mode"],
    [".work__section", "work__section--mode"],
    [".work__grid", "work__grid--mode"],
    [".work__desc-first", "work__desc-first--mode"],
    [".services", "services--mode"],
    [".font__italic", "font__italic--mode"],
    [".textinput", "textinput--mode"],
    [".btn", "btn--mode"],
    [".btn-toggle-sidebar", "btn-toggle-sidebar--mode"],
    [".contact--hide", "contact--hide--mode"],
    [".svg--c", "svg--c--mode"],
    [".name", "name--mode"],
    [".email", "email--mode"],
    [".message", "message--mode"],
    [".inner-circle", "inner-circle--mode"],
    [".service", "service--mode"],
    [".dbn", "dbn--mode"],
    [".wlight", "wlight--mode"],
  ];
  arr.forEach((elem) => {
    document
      .querySelectorAll(elem[0])
      .forEach((el) => el.classList.toggle(elem[1]));
  });

  if (document.querySelector("body").classList.contains("dark")) {
    document.querySelector(".header__logo img").src = "img/logo_light.png";
    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").classList.add("light");
  } else if (document.querySelector("body").classList.contains("light")) {
    document.querySelector(".header__logo img").src = "img/logo_dark.png";
    document.querySelector("body").classList.remove("light");
    document.querySelector("body").classList.add("dark");
  }
  if (document.querySelector("body").classList.contains("light")) {
    document
      .querySelectorAll(".dark__on")
      .forEach((e) => e.classList.toggle("dark__on--mode"));
    document
      .querySelectorAll(".light__on")
      .forEach((e) => e.classList.toggle("light__on--mode"));
  } else if (document.querySelector("body").classList.contains("dark")) {
    document
      .querySelectorAll(".dark__on")
      .forEach((e) => e.classList.toggle("dark__on--mode"));
    document
      .querySelectorAll(".light__on")
      .forEach((e) => e.classList.toggle("light__on--mode"));
  }
  document
    .querySelectorAll(".svglight")
    .forEach((el) => el.classList.toggle("svglight--mode"));
}

function lightDark() {
  allElementOfLightMode();
}

const toggleBtn = document.querySelectorAll(".tg");
toggleBtn.forEach((el) => {
  el.addEventListener("click", function () {
    lightDark();
  });
});

const toggleRound = document.querySelectorAll(".tg");

toggleRound.forEach((el) => {
  el.addEventListener("click", function () {
    const w = el.getBoundingClientRect().width;

    if (el.classList.contains("left")) {
      el.querySelector(".cl").style.transform = `translateX(-${
        w - (el.querySelector(".cl").getBoundingClientRect().width + 10)
      }px)`;
      el.classList.remove("left");
      el.classList.add("right");
    } else if (el.classList.contains("right")) {
      el.querySelector(".cl").style.transform = `translateX(0)`;
      el.classList.remove("right");
      el.classList.add("left");
    }
  });
});

async function formSubmit(user_name, user_email, user_message) {
  const URL_API = "https://api.apispreadsheets.com/data/P3nuVleXwxSzp8MO/";

  const res = await fetch(
    "https://api.apispreadsheets.com/data/P3nuVleXwxSzp8MO/",
    {
      method: "POST",
      body: JSON.stringify({
        data: { name: user_name, email: user_email, message: user_message },
      }),
    }
  );
  if (res.status === 201) {
    const el = document.querySelector(".message-success");
    el.classList.add("message-success--effect");
    document.querySelector(".name").value = "";
    document.querySelector(".email").value = "";
    document.querySelector(".message").value = "";
    setTimeout(() => {
      el.classList.remove("message-success--effect");
    }, 2000);
  }
  console.log(res);
}

const formSubmitBtn = document.querySelector("form");

formSubmitBtn.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector(".name");
  const email = document.querySelector(".email");

  const message = document.querySelector(".message");

  formSubmit(name.value, email.value, message.value);
});

//image effect......
const imgs = document.querySelectorAll(".work__image");

const imgObj = {
  root: null,
  threshold: [0.1, 0.3, 0.5, 0.8, 0.9, 1],
};
const imgCall = function (entries, observer) {
  // const [entry] = entries;
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("work__image--effect");

      observer.unobserve(entry.target);
    }
  });
};
const imgObserver = new IntersectionObserver(imgCall, imgObj);
imgs.forEach((el) => {
  imgObserver.observe(el);
});
