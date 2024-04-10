let toggler = document.querySelector('.toggler')
let navItems = document.querySelector('.nav-items')
let navbar = document.querySelector('nav')
let sbtForm = document.getElementById('submit-form')

toggler.addEventListener('click', togglerAction)
document.addEventListener('click', navOnEvent)
document.addEventListener('wheel', navOnWheel)
navItems.addEventListener('click', navOnClick)
sbtForm.addEventListener('submit', formSubmit)

// Hamberger Visibility
function togglerAction() {
    navItems.classList.toggle('is-active')
}

// Navbar Visibility
function navOnEvent(e) {
    if (e.clientY > 70) {
        navItems.classList.remove('is-active')
        navbar.style.position = 'unset'
    }
}

function navOnWheel(e) {
    if (e.deltaY > 1) {
        navbar.style.position = 'unset';
    } else if (e.deltaY < -1) {
        navbar.style.position = 'fixed';
    }
}

function navOnClick() {
    navbar.style.position = 'unset'
}

// Form Submission
function formSubmit(e) {
    e.preventDefault()
    alert("Being Submitted ,  It may take a while  |  Dont close page until its finished")

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxkcqT9_P9TZ1uNqvdG9EqU4sko0DoHMBWeB5-hhItniShag8ryFU0r4YGPRUic7awh/exec",
        data: $(sbtForm).serialize(),
        method: "post",
        success: (res) => {
            console.log(res)
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error: (err) => {
            console.log(err)
            alert("Submission Error")
        }
    })
}
