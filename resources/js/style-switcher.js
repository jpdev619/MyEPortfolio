// Switcher
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () =>{
document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll", () =>{
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.toggle("open");
    }
})

document.addEventListener("DOMContentLoaded", function() {
    // Get all styles with the class 'alternate-style'
    const alternateStyles = document.querySelectorAll(".alternate-style");

    // Define the function to switch styles
    window.setActiveStyle = function(color) {
        alternateStyles.forEach((style) => {
            // Match the title attribute with the selected color
            if (color === style.getAttribute("title")) {
                style.removeAttribute("disabled");
            } else {
                style.setAttribute("disabled", "true");
            }
        });
    };
});

document.addEventListener("DOMContentLoaded", function() {
    // Get all sections and navbar links
    let sections = document.querySelectorAll('.section');
    let navLinks = document.querySelectorAll('.nav a');  // Assuming nav links have anchor tags

    // Add smooth scrolling behavior (optional, in case CSS isn't used)
    window.onscroll = () => {
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop-150;  // Offset to adjust for smoother experience
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                // Remove 'active' from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Add 'active' to the current nav link that corresponds to the section
                document.querySelector('.nav a[href*=' + id + ']').classList.add('active');
            }
        });
    };
});




const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load" ,() => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

    var typed = new Typed(".typing",{
        strings:["  ", "  Application Developer","Web Developer","Backend Developer", "PHP Laravel Developer", "Linux"],
        typeSpeed:100,
        BackSpeed:60,
        loop:true
    })
