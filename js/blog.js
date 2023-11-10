document.addEventListener("DOMContentLoaded", makeLinksSmooth()) 

function makeLinksSmooth() {
    const navLinks = document.querySelectorAll("header ul a")

    navLinks.forEach((link) => {
        link.addEventListener("click", smoothScrool())
    })
}

function smoothScrool(e) {
    e.preventDefault()
    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
        targetElement.scrollIntoView({ behaviour: "smooth", block: "start" })
    }
}