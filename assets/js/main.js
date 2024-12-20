/*=============== EMAIL JS ===============*/
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'), // Correct ID without '.'
    contactMessage = document.getElementById('contact-message') // Correct ID without '.'

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_nm5whjs', 'template_bmn9fw7', contactForm, 'lB6jwJ45qoN7XtZws')

    .then(() => {
        // Display success message
        contactMessage.textContent = 'Message sent successfully. We will contact you soon.';

        // Clear the message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = ''; // Correct variable
        }, 5000);

        // Reset the form
        contactForm.reset();
    })
    .catch((error) => {
        // Handle errors
        contactMessage.textContent = 'Failed to send the message. Please try again later.';
        console.error('EmailJS Error:', error);
    });
};

// Add event listener to the form
contactForm.addEventListener('submit', sendEmail);



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the tag with the scroll-up class
    window.scrollY >= 350 
      ? scrollUp.classList.add('show-scroll') 
      : scrollUp.classList.remove('show-scroll');
  };
  
  window.addEventListener('scroll', scrollUp);
  


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, // Animations repeat
  });
  
sr.reveal('.perfil, .contact__form');
sr.reveal('.info', {origin: 'left', delay: 800});
sr.reveal('.skills', {origin: 'left', delay: 1000});
sr.reveal('.about', {origin: 'right', delay: 1200});
sr.reveal('.projects__card, .services__card, experience__card', {interval: 100});
