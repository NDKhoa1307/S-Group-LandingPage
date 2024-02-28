// Delay function
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Function to append elements classes to the elements array
function appendElems(section, elements_classes) {
  let elements = [];
  elements_classes.forEach((cls) => {
    section.querySelectorAll(cls).forEach((li) => {
      elements.push(li);
    });
  });
  return elements;
}

// Header animation

const header = document.querySelector(".header");
var starting = true;

function handleScroll() {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > 200) {
    if (starting) {
      header.style.transition = '0s'
      header.style.transform = "translateY(-100%)";
      delay(0).then(() => {
        header.style.transition = '0.8s'
        header.style.transform = "translateY(0%)";
      });
    }
    starting = false;
    header.classList.add("header-active");
    let logo = header.querySelector(".logo img");
    logo.src = "./Assets/img/header_img/logo1.png";
    header.querySelector(".navbar .navbar__selections").style.marginTop =
      "20px";
  } else {
    starting = true;
    header.classList.remove("header-active");
    let logo = header.querySelector(".logo img");
    logo.src = "./Assets/img/header_img/logo2.png";
    header.querySelector(".navbar .navbar__selections").style.marginTop =
      "40px";
  }
}

window.addEventListener("scroll", handleScroll);

// Return button animation
const return_button = document.querySelector('.return_button')
function handleReturnScroll(){
  const scrollPosition = window.pageYOffset;

  if(scrollPosition > 200){
    return_button.style.display = 'inline'
  }
  else{
    return_button.style.display = 'none'
  }
}

window.addEventListener("scroll", handleReturnScroll);

// sectionObserver prototype
class sectionObserver {
  constructor(section_name, section_callback) {
    this.section_name = section_name;
    this.section_callback = section_callback;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.section_callback();
        }
      });
    });
  }

  observe() {
    return this.observer.observe(this.section_name);
  }
}

// Navbar selection menu
const navItems = document.querySelectorAll(".navbar .navbar__selections > li");

// For every nav componenent except elements
Array.from(navItems)
  .slice(0, -1)
  .forEach((navItem) => {
    const dropdown = navItem.querySelector("div");
    // When mouse enter, add display block to dropdown
    navItem.addEventListener("mouseenter", () => {
      dropdown.style.display = "block";
    });

    navItem.addEventListener("mouseleave", (event) => {
      dropdown.style.display = "none";
    });
  });

// For elements
const nav_elements = document.querySelector(
  ".navbar .navbar__selections .elements"
);
const nav_elem_dropdown = document.querySelector(
  ".navbar .navbar__selections .elements_dropdown"
);

nav_elements.addEventListener("mouseenter", () => {
  nav_elem_dropdown.style.display = "block";
});
nav_elements.addEventListener("mouseleave", () => {
  nav_elem_dropdown.style.display = "none";
});

nav_elem_dropdown.addEventListener("mouseenter", () => {
  nav_elem_dropdown.style.display = "block";
});
nav_elem_dropdown.addEventListener("mouseleave", () => {
  nav_elem_dropdown.style.display = "none";
});

// Cart
let flag = true
const clsItems = document.querySelector(".cls");
const cart_element = clsItems.querySelector(".cart");

clsItems.addEventListener("mouseenter", () => {
  cart_element.style.display = "flex";
});
clsItems.addEventListener("mouseleave", async () => {
  await delay(300).then(() => {
    if (flag) {
      cart_element.style.display = "none";
    }
  });
});

cart_element.addEventListener("mouseenter", () => {
  flag = false
  cart_element.style.display = "flex";
});
cart_element.addEventListener("mouseleave", () => {
  flag = true
  cart_element.style.display = "none";
});

// Section 2
// Define section2 variables
const section2 = document.getElementById("section2");

const section2_callback = async (elements) => {
  for await (let li of elements) {
    li.classList.add("section2_show");
    if (li.classList[0] == "background_letter") {
      await delay(50);
    } else {
      await delay(500);
    }
  }
};

// Push each element into an array to observe
const section2_element_classes = [
  ".content_header",
  ".content_para",
  ".main_contents .details div",
  ".background_letters span",
  " .details",
  ".images",
];

let section2_elements = appendElems(section2, section2_element_classes);

// Define observer
let section2_observer = new sectionObserver(section2, () => {
  section2_callback(section2_elements);
});

// Observe
section2_observer.observe();

// Section3
// Define section3 variables
const section3 = document.querySelector("#section3");

const section3_element_classes = [
  ".background_image",
  ".content_header",
  ".content_para",
  ".button",
  ".images img",
];

let section3_elements = appendElems(section3, section3_element_classes);

const section3_callback = async (elements) => {
  for await (let li of elements) {
    li.classList.add("section3_show");
    if (li.classList[0].includes("img")) {
      await delay(0);
    } else {
      await delay(100);
    }
  }
};

// Define observer
let section3_observer = new sectionObserver(section3, () => {
  section3_callback(section3_elements);
});

// Observe
section3_observer.observe();

// Section 5
// Define section5 variables
const section5 = document.querySelector("#section5");

const section5_element_classes = [
  ".background_image img",
  ".side_image",
  ".content_header",
  ".content_para",
  ".details",
  ".background_letter span",
];

const section5_elements = appendElems(section5, section5_element_classes);

const section5_callback = async (elements) => {
  for await (let elem of elements) {
    elem.classList.add("section5_show");
    if (elem.classList[0] == "section5_show") {
      await delay(100);
    } else {
      await delay(500);
    }
  }
};

// Define observer
const section5_observer = new sectionObserver(section5, () => {
  section5_callback(section5_elements);
});

// Observe
section5_observer.observe();

// Section 6
// Define variables
const section6 = document.querySelector("#section6");

const section6_element_classes = [
  ".background_image img",
  ".content_header",
  ".content_para",
  ".button",
  ".bottom_img",
  ".middle_img",
  ".top_img",
];

const section6_elements = appendElems(section6, section6_element_classes);

const section6_callback = async (elements) => {
  for await (let li of elements) {
    li.classList.add("section6_show");
    if (li.classList[0].includes("img")) {
      await delay(400);
    } else if (li.classList[0].includes("content")) {
      await delay(200);
    } else {
      delay(500);
    }
  }
};

// Define observer
const section6_observer = new sectionObserver(section6, () => {
  section6_callback(section6_elements);
});

// Observe
section6_observer.observe();

// Section 8
const section8 = document.querySelector("#section8");

const section8_callback = async () => {
  const scroller = section8.querySelector(".scroller");

  const imageSources = [
    "./Assets/img/section8_img/first.png",
    "./Assets/img/section8_img/second.png",
    "./Assets/img/section8_img/third.png",
    "./Assets/img/section8_img/fourth.png",
    "./Assets/img/section8_img/fifth.png",
    "./Assets/img/section8_img/sixth.png",
    "./Assets/img/section8_img/seventh.png",
    "./Assets/img/section8_img/eighth.png",
  ];

  let currentImageIndex = 0;
  let isAnimating = false;

  const shiftAndAppendImage = async () => {
    isAnimating = true;
    const firstImage = scroller.querySelector("img");
    const newImage = document.createElement("img");

    newImage.src = imageSources[currentImageIndex];

    firstImage.style.marginLeft = `-${firstImage.clientWidth}px`;
    firstImage.style.transition = "all 0.5s ease-in-out";
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;

    await new Promise((resolve) => {
      firstImage.addEventListener("transitionend", resolve);
    });

    scroller.removeChild(firstImage);
    scroller.appendChild(newImage);

    
    isAnimating = false;
  };

  async function startAnimationLoop() {
    while (true) {
      if (!isAnimating) {
        await shiftAndAppendImage();
      }
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }

  startAnimationLoop();
};

const section8_observer = new sectionObserver(section8, () => {
  section8_callback();
});
section8_observer.observe();
