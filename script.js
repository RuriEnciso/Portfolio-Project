/** ****************** Mobile menu ************************* */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function toggleMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

/** ************** Refactoring projects section *************** */
const projects = [
  {
    id: 1,
    title: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    buttonName: 'See Project',
  },

  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    buttonName: 'See Project',
  },

  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    buttonName: 'See Project',
  },

  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    buttonName: 'See Project',
  },

  {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    buttonName: 'See Project',
  },

  {
    id: 6,
    title: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    buttonName: 'See Project',
  },
];

/* The cards container */
const cards = document.querySelector('.cards');

/* Create cards */
projects.forEach((project) => {
  /* Create the elements */
  const div = document.createElement('div');
  const divImg = document.createElement('div');
  const cardTextDiv = document.createElement('div');
  const h3 = document.createElement('h3');
  const ul = document.createElement('ul');
  const button = document.createElement('button');

  /* Giving classes */
  div.classList.add('card');
  divImg.classList.add('card-image');
  cardTextDiv.classList.add('card-description');
  h3.classList.add('card-title');
  ul.classList.add('card-tools-list');
  button.classList.add('see-project', 'open-modal');

  /* Assing values */
  h3.textContent = project.title;
  button.textContent = project.buttonName;
  button.dataset.projectId = project.id;

  /* Creating languages list */
  project.languages.forEach((language) => {
    const li = document.createElement('li');
    li.classList.add('card-tool');
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

/** **************** popup window **************** */
const popups = [
  {
    id: 1,
    image: './images/desktop/Snapshoot-Portfolio.svg',
    title: 'Keeping track of hundreds of components',
    languages: ['HTML', 'CSS', 'Javascript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://www.example.com/',
    sourceLink: 'https://github.com/RuriEnciso/Portfolio-Project',
  },

  {
    id: 2,
    image: './images/desktop/Snapshoot-Portfolio.svg',
    title: 'Keeping track of hundreds of components',
    languages: ['HTML', 'CSS', 'Javascript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://www.example.com/',
    sourceLink: 'https://github.com/RuriEnciso/Portfolio-Project',
  },

  {
    id: 3,
    image: './images/desktop/Snapshoot-Portfolio.svg',
    title: 'Keeping track of hundreds of components',
    languages: ['HTML', 'CSS', 'Javascript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://www.example.com/',
    sourceLink: 'https://github.com/RuriEnciso/Portfolio-Project',
  },

  {
    id: 4,
    image: './images/desktop/Snapshoot-Portfolio.svg',
    title: 'Keeping track of hundreds of components',
    languages: ['HTML', 'CSS', 'Javascript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://www.example.com/',
    sourceLink: 'https://github.com/RuriEnciso/Portfolio-Project',
  },

  {
    id: 5,
    image: './images/desktop/Snapshoot-Portfolio.svg',
    title: 'Keeping track of hundreds of components',
    languages: ['HTML', 'CSS', 'Javascript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://www.example.com/',
    sourceLink: 'https://github.com/RuriEnciso/Portfolio-Project',
  },

  {
    id: 6,
    image: './images/desktop/Snapshoot-Portfolio.svg',
    title: 'Keeping track of hundreds of components',
    languages: ['HTML', 'CSS', 'Javascript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://www.example.com/',
    sourceLink: 'https://github.com/RuriEnciso/Portfolio-Project',
  },
];

/* calling the popup container */

function showPopup(popupId) {
  // Find the object from pupus by id
  const popup = popups.find((popup) => popup.id == popupId);
  // create elements
  const divModal = document.createElement('div');
  const divModContent = document.createElement('div');
  const divMheader = document.createElement('div');
  const img2 = document.createElement('img');
  const closeBtn = document.createElement('button');
  const divTitle = document.createElement('div');
  const modalH3 = document.createElement('h3');
  const ulModal = document.createElement('ul');
  const divTextBtn = document.createElement('div');
  const modalParag = document.createElement('p');
  const divBtns = document.createElement('div');
  const btnLive = document.createElement('button');
  const btnSource = document.createElement('button');
  const aLive = document.createElement('a');
  const aSource = document.createElement('a');
  const imgLive = document.createElement('img');
  const imgSource = document.createElement('img');
  const elementsDiv = document.createElement('div');

  /* Add classed to the elements */
  divModal.classList.add('modal');
  divModContent.classList.add('modal-content');
  divMheader.classList.add('modal-header');
  img2.classList.add('modal-img');
  closeBtn.classList.add('close-button');
  divTitle.classList.add('title-list');
  modalH3.classList.add('modal-title');
  ulModal.classList.add('modal-list');
  divTextBtn.classList.add('text-and-btns');
  modalParag.classList.add('M-text');
  divBtns.classList.add('modal-btns');
  btnLive.classList.add('see-project', 'live-btn');
  btnSource.classList.add('see-project', 'source-btn');
  imgSource.src = './images/desktop/git-modal-icon.png';
  imgLive.src = './images/desktop/live-icon.png';
  elementsDiv.classList.add('modal-elements');

  /* Assing values */
  img2.src = popup.image;
  closeBtn.innerHTML = '&times';
  modalH3.textContent = popup.title;
  popup.languages.forEach((language) => {
    const li2 = document.createElement('li');
    li2.textContent = language;
    li2.classList.add('modal-lang');
    ulModal.appendChild(li2);
  });
  modalParag.textContent = popup.description;
  btnLive.textContent = 'See live';
  btnSource.textContent = 'See Source';
  aLive.href = popup.liveLink;
  aLive.target = '_blank';
  aLive.rel = 'noopener';
  aSource.href = popup.sourceLink;
  aSource.target = '_blank';
  aSource.rel = 'noopener';

  /* Append elements to modal container */
  divMheader.appendChild(img2);
  divMheader.appendChild(closeBtn);

  divTitle.appendChild(modalH3);
  divTitle.appendChild(ulModal);

  btnLive.appendChild(imgLive);
  btnSource.appendChild(imgSource);

  aLive.appendChild(btnLive);
  aSource.appendChild(btnSource);

  divBtns.appendChild(aLive);
  divBtns.appendChild(aSource);

  divTextBtn.appendChild(modalParag);
  divTextBtn.appendChild(divBtns);

  elementsDiv.appendChild(divTitle);
  elementsDiv.appendChild(divTextBtn);

  divModContent.appendChild(divMheader);
  divModContent.appendChild(elementsDiv);

  divModal.appendChild(divModContent);

  // append modal container to body
  document.body.appendChild(divModal);

  // call modal container
  const modal = document.querySelector('.modal');

  // change the value of 'display: none' in css  to 'block'
  modal.style.display = 'block';

  // close popup
  const closeModalBtn = document.querySelector('.close-button');
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // close pupup
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// get the buttons of each card
const cardButtons = document.querySelectorAll('.open-modal');

// Assing a event controler to each button
cardButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // get ID of popups objects
    const popupId = button.dataset.projectId;
    // call the popup function with id
    showPopup(popupId);
  });
});
