// Header hamburger menu

let navList = [
  {
    id: 'js-home',
    link: '#home',
    text: 'Home',
    inHeader: true
  },
  {
    id: 'js-portfolio',
    link: '#portfolio',
    text: 'Portfolio',
    inHeader: true
  },
  {
    id: 'js-about-me',
    link: '#about-me',
    text: 'About Me',
    inHeader: true
  },
  {
    id: 'js-resume',
    link: '#resume_and_contact',
    text: 'Resume',
    inHeader: true
  },
  {
    id: 'js-contact',
    link: '#resume_and_contact',
    text: 'Contact',
    inHeader: true
  },
];



// RENDER NAVLIST
renderNavList();

function renderNavList() {
  let navListHTML = '';

  navList.forEach(navListItem => {
    if (navListItem.inHeader == false) {
      return;
    }
    
    const itemHTML = `
      <li id="${navListItem.id}"><a href="${navListItem.link}">${navListItem.text}</a></li>
    `
    // append
    navListHTML += itemHTML;
  });

  document.getElementById('js-nav-list-ul').innerHTML = navListHTML;
}

let navListElement = document.getElementById('nav-list');
const hamburgerMenuElement = document.getElementById('hamburger-menu');

// detect resizes
let width = window.innerWidth;
let height = window.innerHeight;

window.addEventListener('resize', function() {

  width = window.innerWidth;

  // test
  height = window.innerHeight;
  this.document.getElementById('test').innerHTML = `W = ${width} x H = ${height}`;

  if (width < 850) {
    hamburgerMenuElement.style.display = "block";
    hamburgerMenuElement.style.marginRight = "1em";
    navList[4].inHeader = false;
  } else {
    hamburgerMenuElement.style.display = "none";
    hamburgerMenuElement.style.marginRight = "0";
    navList[4].inHeader = true;
  }

  navList[3].inHeader = width >= 750;
  navList[2].inHeader = width >= 650;
  navList[1].inHeader = width >= 550;
  navList[0].inHeader = width >= 450;

  navListElement.style.display = (width < 420) ? "none" : "block";

  // renderNavList();
  
});


// mobile menu click
hamburgerMenuElement.addEventListener('click', function() {
  // Your code to execute when the hamburger menu is clicked
});




// smooth scroll. DO NOT TOUCH
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});