document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    /*document.addEventListener('DOMContentLoaded', () => {
         const sections = document.querySelectorAll('section');

         function checkSlide() {
          sections.forEach(section => {
           // Calculate how far the section is from the top of the viewport
           const slideInAt = (window.scrollY + window.innerHeight) - section.offsetHeight / 2;
           // Bottom of the image
           const imageBottom = section.offsetTop + section.offsetHeight;
           const isHalfShown = slideInAt > section.offsetTop;
           const isNotScrolledPast = window.scrollY < imageBottom;

           if (isHalfShown && isNotScrolledPast) {
            section.classList.add('slide-in');
           } else {
            section.classList.remove('slide-in');
           }
          });
         }

         window.addEventListener('scroll', checkSlide);
        });*/
});