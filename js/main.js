/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navclose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navclose) {
    navclose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // Replace the placeholders with your own EmailJS parameters
    emailjs.sendForm('service_c4e5x0j', 'template_n76n4zg', '#contact-form', 'JGB-0-KKHxZAWE4D1')
        .then(() => {
            // Show success message
            contactMessage.textContent = 'Message sent successfully';

            //Remove message after five seconds

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            //clear input fields
            contactForm.reset()

        })
        .catch((error) => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error): ' + error;
        });
};

contactForm.addEventListener('submit', sendEmail);

// emailjs.sendForm('service_c4e5x0j', 'template_n76n4zg', '#contact-form', 'NJ9bNg_1rwHQjxq2i6tq3')
/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


// Select all sections with an "id" attribute
const sections = document.querySelectorAll('section[id]');

// Function to handle scroll event
const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

// Add scroll event listener to window
window.addEventListener('scroll', scrollActive);


// const sections = document.querySelectorAll('section[id]')
// const scrollActive = () => {
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight,
//             sectionTop = current.offsetTop - 58,
//             sectionId = current.getAttribute('id'),
//             sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             sectionsClass.classList.add('active-link')
//         } else {
//             sectionsClass.classList.remove('active-link')
//         }
//     })
// }
//     window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/