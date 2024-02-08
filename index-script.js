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
/*

Breakpoints:

@media screen and (max-width: 850px) {
  #hamburger-menu {
    display: block;
    margin-right: 1em;
  }
  #nav-list ul li:last-child {
    display: none;
  }
}
@media screen and (max-width: 750px) {
  #nav-list ul li:nth-last-child(2) {
    display: none;
  }
}
@media screen and (max-width: 650px) {
  #nav-list ul li:nth-last-child(3) {
    display: none;
  }
  .flex-row {
    row-gap: 0;
    column-gap: 20px;
  }
  #home-content-box {
    flex-direction: column-reverse;
  }
}
@media screen and (max-width: 550px) {
  #nav-list ul li:nth-last-child(4) {
    display: none;
  }
  .row-switch {
    flex-direction: column;
  }
}
@media screen and (max-width: 450px) {
  #nav-list ul li:nth-last-child(5) {
    display: none;
  }
}
@media screen and (max-width: 420px) {
  #hamburger-menu {
    display: block;
    margin-right: 1em;
  }
  #nav-list ul li:last-child {
    display: none;
  }
  #nav-list {
    width: 0;
    margin: 0;
  }
}

*/

function adjustNav() {
  const navList = document.getElementById('nav-list').getElementsByTagName('ul')[0];
  const navItems = navList.getElementsByTagName('li');
  const lastItem = navItems[navItems.length -  1];

  // Get the viewport width
  let vpWidth = window.innerWidth || document.documentElement.clientWidth;

  // Check the viewport width and hide/show the last item accordingly
  if (vpWidth <=  450) {
    lastItem.style.display = 'none'; // Hide the last item
  } else {
    lastItem.style.display = ''; // Show the last item
  }
  console.log(navList + " & " + navItems + " & " + lastItem);
  console.log(vpWidth);
}

// Call the function initially to set the correct state
adjustNav();

// Listen for resize events
window.addEventListener('resize', adjustNav);


// Additional JavaScript for form validation or other interactions
