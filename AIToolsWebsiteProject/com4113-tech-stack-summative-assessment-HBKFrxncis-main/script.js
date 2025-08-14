document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling buttons
    var scrollButton1 = document.getElementById('scrollButton');
    var scrollButton2 = document.getElementById('scrollButton2');

    // Function to handle smooth scrolling for Button 1
    scrollButton1?.addEventListener('click', function () {
        var section1 = document.getElementById('section1');
        section1?.scrollIntoView({ behavior: 'smooth' }); // Ensure the section exists
    });

    // Function to handle smooth scrolling for Button 2
    scrollButton2?.addEventListener('click', function () {
        var section2 = document.getElementById('section2');
        section2?.scrollIntoView({ behavior: 'smooth' }); // Ensure the section exists
    });

    // Smooth scrolling for links
    var colorLink = document.getElementById('colorLink');
    var paletteLink = document.getElementById('paletteLink');

    // Function to scroll to section 1 (Colours)
    colorLink?.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        var section1 = document.getElementById('section1');
        section1?.scrollIntoView({ behavior: 'smooth' }); // Ensure the section exists
    });

    // Function to scroll to section 2 (Palettes)
    paletteLink?.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        var section2 = document.getElementById('section2');
        section2?.scrollIntoView({ behavior: 'smooth' }); // Ensure the section exists
    });

    // Slideshow functionality
    var slides = document.querySelectorAll('.slide');
    var dots = document.querySelectorAll('.dot');
    var currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.style.display = idx === index ? 'block' : 'none';
        });
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Auto slide every 5 seconds (if slides exist)
    if (slides.length > 0) {
        setInterval(nextSlide, 5000);
    }

    // Arrow navigation
    document.querySelectorAll('.next').forEach((btn) => {
        btn.addEventListener('click', nextSlide);
    });

    document.querySelectorAll('.prev').forEach((btn) => {
        btn.addEventListener('click', prevSlide);
    });

    // Dot navigation
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', function () {
            currentSlide = idx;
            showSlide(idx);
        });
    });

    // Initialize the first slide (if slides exist)
    if (slides.length > 0) {
        showSlide(currentSlide);
    }
});

