// Header hamburger menu

let navList = [
  {
    link: '#home',
    text: 'Home'
  },
  {
    link: '#portfolio',
    text: 'Portfolio'
  },
  {
    link: '#about-me',
    text: 'About Me'
  },
  {
    link: '#resume_and_contact',
    text: 'Resume'
  },
  {
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

  for (i=0; i<navList.length; i++) {
    const navListItem = navList[i];
    const itemHTML = `
      <li><a href="${navListItem.link}">${navListItem.text}</a></li>
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

// detect resizes
window.addEventListener('resize', function() {

  // test
  var width = window.innerWidth;
  var height = window.innerHeight;
  this.document.getElementById('test').innerHTML = `W = ${width} x H = ${height}`;

  
  
});


// Additional JavaScript for form validation or other interactions
