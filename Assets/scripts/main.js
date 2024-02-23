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
    } 
    else {
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
const section5 = document.querySelector('#section5');

const section5_element_classes = [
  '.background_image img',
  '.side_image',
  '.content_header',
  '.content_para',
  '.details',
  '.background_letter span'
]

const section5_elements = appendElems(section5, section5_element_classes)

const section5_callback = async (elements) => {
  for await(let elem of elements){
    elem.classList.add('section5_show');
    if (elem.classList[0] == 'section5_show') {
      await delay(100);
    } else {
      await delay(500);
    }
  }
}

// Define observer
const section5_observer = new sectionObserver(section5, () => {
  section5_callback(section5_elements)
})

// Observe
section5_observer.observe();