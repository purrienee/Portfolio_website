document.addEventListener("DOMContentLoaded", () => {
    
    const preloader = document.querySelector(".preloader");
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = "0";
            setTimeout(() => preloader.style.display = "none", 500);
        }, 1500);
    }

    
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    document.addEventListener("mousemove", (e) => {
        if (cursor && follower) {
            cursor.style.opacity = "1";
            follower.style.opacity = "1";
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;

            follower.style.left = `${e.clientX}px`;
            follower.style.top = `${e.clientY}px`;
        }
    });

    
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            mobileMenu.classList.toggle("active");
        });
    }

    
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    
    const backToTop = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    
    const statNumbers = document.querySelectorAll(".stat-number");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let count = 0;
                    const target = parseInt(entry.target.getAttribute("data-count"));
                    const interval = setInterval(() => {
                        count += Math.ceil(target / 50);
                        if (count >= target) {
                            entry.target.textContent = target;
                            clearInterval(interval);
                        } else {
                            entry.target.textContent = count;
                        }
                    }, 30);
                }
            });
        },
        { threshold: 0.5 }
    );

    statNumbers.forEach((num) => observer.observe(num));

    
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
            const filter = button.getAttribute("data-filter");

            projectCards.forEach((card) => {
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

   
    const slides = document.querySelectorAll(".testimonial-slide");
    const dots = document.querySelectorAll(".testimonial-dot");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
            dots[i].classList.toggle("active", i === index);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    showSlide(currentSlide);
});

AOS.init()