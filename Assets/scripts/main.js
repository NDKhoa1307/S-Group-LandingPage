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

// sectionObserver prototype
class sectionObserver {
  constructor(section_name, section_callback) {
    this.section_name = section_name;
    this.section_callback = section_callback;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(this.section_name);
          this.section_callback();
        }
      });
    });
  }

  observe() {
    return this.observer.observe(this.section_name);
  }
}

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

const section8_callback = () => {
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

  async function shiftAndAppendImage() {
    await delay(3000).then(() => {
      const firstImage = scroller.querySelector('img');
      const newImage = document.createElement("img");

      newImage.src = imageSources[currentImageIndex];
      
      firstImage.style.transition = "all 0.5s ease-in-out";

      firstImage.style.marginLeft = `-${firstImage.clientWidth}px`;
      console.log(firstImage.classList)

      scroller.removeChild(firstImage);
      scroller.appendChild(newImage);

      currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    });
  }
  setInterval(shiftAndAppendImage, 3000);
};

const section8_observer = new sectionObserver(section8, () => {
  section8_callback();
});
section8_observer.observe();
