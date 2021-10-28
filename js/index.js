const navToggle = document.querySelector(".nav-toggle")

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open")
})

const navLinks = document.querySelectorAll(".nav__link")

navLinks.forEach(function (link) {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open')
            console.log("oh, hi - you´re checking out my code ;) ")
        })
    })