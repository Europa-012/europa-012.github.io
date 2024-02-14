// Header hamburger menu

let navList = [
  {
    id: 'js-home',
    link: '#home',
    text: 'Home'
  },
  {
    id: 'js-portfolio',
    link: '#portfolio',
    text: 'Portfolio'
  },
  {
    id: 'js-about-me',
    link: '#about-me',
    text: 'About Me'
  },
  {
    id: 'js-resume',
    link: '#resume_and_contact',
    text: 'Resume'
  },
  {
    id: 'js-contact',
    link: '#resume_and_contact',
    text: 'Contact'
  },
];
let itemsOnScreen = navList.length;
console.log(itemsOnScreen);

// RENDER NAVLIST
renderNavList();

function renderNavList() {
  let navListHTML = '';

  for (i = 0; i < navList.length; i++) {
    const navListItem = navList[i];
    const itemHTML = `
      <li id="${navListItem.id}"><a href="${navListItem.link}">${navListItem.text}</a></li>
    `;
    // append
    navListHTML += itemHTML;
  }

  document.getElementById('js-nav-list-ul').innerHTML = navListHTML;
}




// smooth scroll. DO NOT TOUCH
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// header tabs/links
let homeTabElement = document.getElementById('js-home');
let portfolioTabElement = document.getElementById('js-portfolio');
let aboutMeTabElement = document.getElementById('js-about-me');
let resumeTabElement = document.getElementById('js-resume');
let contactTabElement = document.getElementById('js-contact');
let hamburgerMenuElement = document.getElementById('hamburger-menu');

// detect resizes
window.addEventListener('resize', function() {

  var width = window.innerWidth;

  // test
  var height = window.innerHeight;
  this.document.getElementById('test').innerHTML = `W = ${width} x H = ${height}`;

  if (width < 850) {
    hamburgerMenuElement.style.display = "block";
    hamburgerMenuElement.style.marginRight = "1em";
    contactTabElement.style.display = "none";
  }
  
});


// Additional JavaScript for form validation or other interactions