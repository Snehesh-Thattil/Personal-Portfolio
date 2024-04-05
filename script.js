let toggler = document.querySelector('.toggler')
let navItems = document.querySelector('.nav-items')

toggler.addEventListener('click', () => {
    navItems.classList.toggle('is-active')
})

let photoDiv = document.querySelector('.photo')
let TitleDiv = document.querySelector('.title')

photoDiv.addEventListener('click', isActiveRemove)
TitleDiv.addEventListener('click', isActiveRemove)

function isActiveRemove() {
    navItems.classList.remove('is-active')
}