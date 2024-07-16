window.onscroll = function() {
    var sections = document.querySelectorAll('.section');
    var navItems = document.querySelectorAll('.n-item');
    var current = '';

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 50) {
            current = section.id;
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.querySelector('a').getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
};

document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.n-item');
    const sections = document.querySelectorAll('.section');
     
    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');

            const targetSection = document.getElementById(this.querySelector('a').getAttribute('href').slice(1));
            window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.n-list');
  
    menuToggle.addEventListener('click', function () {
      navList.classList.toggle('active'); // Toggle class to show/hide nav menu
    });
  
    // Optional: Close nav menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.n-links');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navList.classList.remove('active');
      });
    });
  });
  
  










