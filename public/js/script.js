document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            sections.forEach(section => {
                section.classList.remove("active");
            });
            document.getElementById(targetId).classList.add("active");
            navLinks.forEach(nav => nav.parentElement.classList.remove("current"));
            this.parentElement.classList.add("current");
        });
    });
});