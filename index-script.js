// Add any interactive elements or transitions here

// Example smooth scroll using JavaScript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

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

// renderNavList();
updateNavList();

function updateNavList() {
  let navListHTML = '';

  navList.forEach(navListItem => {
    const { link, text } = navListItem;
    const itemHTML = `
      <li><a href="${navListItem.link}">${navListItem.text}</a></li>
    `;
    // append
    navListHTML += itemHTML;
  });

  document.getElementById('js-nav-list-ul').innerHTML = navListHTML;
}

// function adjustNav() {
//   const navList = document.getElementById('nav-list').getElementsByTagName('ul')[0];
//   const navItems = navList.getElementsByTagName('li');
//   const lastItem = navItems[navItems.length -  1];

//   // Get the viewport width
//   let vpWidth = window.innerWidth || document.documentElement.clientWidth;

//   // Check the viewport width and hide/show the last item accordingly
//   if (vpWidth <=  450) {
//     lastItem.style.display = 'none'; // Hide the last item
//   } else {
//     lastItem.style.display = ''; // Show the last item
//   }
//   console.log(navList + " & " + navItems + " & " + lastItem);
//   console.log(vpWidth);
// }

// // Call the function initially to set the correct state
// adjustNav();

// // Listen for resize events
// window.addEventListener('resize', adjustNav);


// Additional JavaScript for form validation or other interactions
