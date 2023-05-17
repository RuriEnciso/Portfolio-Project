/******************** Mobile menu **************************/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
  
hamburger.addEventListener("click", toggleMenu);

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

/**************** Refactoring projects section ****************/
let projects = [
    {
        title: "Multi-Post Stories Gain+Glory",
        languages: ["Ruby on Rails", "CSS", "Javascript", "HTML"],
        buttonName: "See Project"
    },

    {
        title: "Multi-Post Stories Gain+Glory",
        languages: ["Ruby on Rails", "CSS", "Javascript", "HTML"],
        buttonName: "See Project"
    },

    {
        title: "Multi-Post Stories Gain+Glory",
        languages: ["Ruby on Rails", "CSS", "Javascript", "HTML"],
        buttonName: "See Project"
    },

    {
        title: "Multi-Post Stories Gain+Glory",
        languages: ["Ruby on Rails", "CSS", "Javascript", "HTML"],
        buttonName: "See Project"
    },

    {
        title: "Multi-Post Stories Gain+Glory",
        languages: ["Ruby on Rails", "CSS", "Javascript", "HTML"],
        buttonName: "See Project"
    },

    {
        title: "Multi-Post Stories Gain+Glory",
        languages: ["Ruby on Rails", "CSS", "Javascript", "HTML"],
        buttonName: "See Project"
    },
]

/* The cards container */
let cards = document.getElementById('project-cards');

/* Create 6 cards */
projects.forEach((project) => {
    /* Create the elements */
    let div = document.createElement('div');
    let divImg = document.createElement('div');
    let cardTextDiv = document.createElement('div')
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');
    let button = document.createElement('button');

    /* Giving classes */
    div.classList.add('card');
    divImg.classList.add('card-image');
    cardTextDiv.classList.add('card-description');
    h3.classList.add('card-title');
    ul.classList.add('card-tools-list');
    button.classList.add('see-project');

    /* Assing values */
    h3.textContent = project.title;
    button.textContent = project.buttonName;

    /* Creating languages list */
    project.languages.forEach((language) => {
        let li = document.createElement('li')
        li.textContent = language;
        ul.appendChild(li);
    });

    /* Append elements to cardTextdiv */
    cardTextDiv.appendChild(h3);
    cardTextDiv.appendChild(ul);
    cardTextDiv.appendChild(button);

    /* Append elements to the div */
    div.appendChild(divImg);
    div.appendChild(cardTextDiv);

    /* Append card div to the cards container */

    cards.appendChild(div);
});

/****************** popup window *****************/

let popup = [
    {
        image: "./images/mobile/popup-mobile.svg",
        title: "Keeping track of hundreds of components",
        languages: ["HTML", "CSS", "Javascript"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        liveLink: "https://rurienciso.github.io/Portfolio-Project/",
        sourceLink: "https://github.com/RuriEnciso/Portfolio-Project"
    },

    {
        image: "./images/mobile/popup-mobile.svg",
        title: "Keeping track of hundreds of components",
        languages: ["HTML", "CSS", "Javascript"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        liveLink: "https://rurienciso.github.io/Portfolio-Project/",
        sourceLink: "https://github.com/RuriEnciso/Portfolio-Project"
    },

    {
        image: "./images/mobile/popup-mobile.svg",
        title: "Keeping track of hundreds of components",
        languages: ["HTML", "CSS", "Javascript"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        liveLink: "https://rurienciso.github.io/Portfolio-Project/",
        sourceLink: "https://github.com/RuriEnciso/Portfolio-Project"
    },

    {
        image: "./images/mobile/popup-mobile.svg",
        title: "Keeping track of hundreds of components",
        languages: ["HTML", "CSS", "Javascript"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        liveLink: "https://rurienciso.github.io/Portfolio-Project/",
        sourceLink: "https://github.com/RuriEnciso/Portfolio-Project"
    },

    {
        image: "./images/mobile/popup-mobile.svg",
        title: "Keeping track of hundreds of components",
        languages: ["HTML", "CSS", "Javascript"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        liveLink: "https://rurienciso.github.io/Portfolio-Project/",
        sourceLink: "https://github.com/RuriEnciso/Portfolio-Project"
    },

    {
        image: "./images/mobile/popup-mobile.svg",
        title: "Keeping track of hundreds of components",
        languages: ["HTML", "CSS", "Javascript"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        liveLink: "https://rurienciso.github.io/Portfolio-Project/",
        sourceLink: "https://github.com/RuriEnciso/Portfolio-Project"
    },
]



