let btn = document.querySelector(".toggle");
let icon = document.querySelector(".toggle i");
let body = document.querySelector("body");

btn.onclick = function() {
    body.classList.toggle("light-theme");
    if (body.classList.contains("light-theme")) {
        icon.classList.add("fa-moon");
        icon.classList.remove("fa-sun");
    } else {
        icon.classList.add("fa-sun");
        icon.classList.remove("fa-moon");
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navigation .nav a i"); 
    const sections = document.querySelectorAll("section"); 
    function updateActiveNav() {
        let scrollPosition = window.scrollY + window.innerHeight / 3; 

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((icon) => {
                    icon.classList.remove("active"); 
                    if (icon.parentElement.getAttribute("href") === `#${sectionId}`) {
                        icon.classList.add("active");
                    }
                });
            }
        });

        //
        if (window.scrollY === 0) {
            navLinks.forEach((icon) => icon.classList.remove("active"));
            document.querySelector(".navigation .nav a[href='#home'] i").classList.add("active");
        }

        // 
        const lastSection = sections[sections.length - 1];
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
            navLinks.forEach((icon) => icon.classList.remove("active"));
            document.querySelector(`.navigation .nav a[href='#${lastSection.id}'] i`).classList.add("active");
        }
    }

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav(); //
});






