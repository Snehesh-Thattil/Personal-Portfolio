let toggler = document.querySelector('.toggler')
let navItems = document.querySelector('.nav-items')
let navbar = document.querySelector('nav')
let sbtForm = document.getElementById('submit-form')
let aptmntDiv = document.getElementById('aptmnt-sec')

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

// Hire Button Action
function hireBtnClick() {
    window.location.href = "#aptmnt-sec"

    let keyframes = [
        { offset: 0, transform: 'rotate(0)' },
        { offset: 0.1, transform: 'rotate(10deg)' },
        { offset: 0.25, transform: 'translateY(50px)' },
        { offset: 0.5, transform: 'rotate(-10deg)' },
        { offset: 0.75, transform: 'translateY(-50px)' },
        { offset: 0.9, transform: 'rotate(10deg)' },
        { offset: 1, transform: 'rotete(0)' }
    ]

    let animaion = aptmntDiv.animate(keyframes, {
        duration: 1000,
        direction: 'normal'
    })
    
    animaion.play()
}

// GitHub Redirects
function viewWorkCode(workName) {

    switch (workName) {
        case 'Ecommerce_Site':
            window.open('https://github.com/Snehesh-Thattil/Ecommerce-Site')
            break;
        case 'React_Game':
            window.open('https://github.com/Snehesh-Thattil/React-Game')
            break;
        case 'Travel_Site':
            window.open('https://github.com/Snehesh-Thattil/Travel-Site')
            break;
        case 'FoodDelivery_Site':
            window.open('https://github.com/Snehesh-Thattil/FoodDelivery-Site')
            break;
        case 'Landing_Pg':
            window.open('https://github.com/Snehesh-Thattil/Personal-Portfolio')
            break;
        case 'Netflix_Cln':
            window.open('https://github.com/Snehesh-Thattil/Netflix-Clone')
            break;
        case 'Flipkart_Cln':
            window.open('https://github.com/Snehesh-Thattil/Flipkart-Clone')
            break;
        case 'Olx_Cln':
            window.open('https://github.com/Snehesh-Thattil/Olx-Clone')
            break;
        default:
            console.log(workName + ': Not Found Link')
            alert('Something went wrong | view project manually')
            window.open('https://github.com/Snehesh-Thattil')
    }
}

// Profile Redirects
function profileRedirect(e) {
    let redirectTo = e.target.classList[1]

    switch (redirectTo) {
        case 'fa-github':
            window.open('https://github.com/Snehesh-Thattil')
            break;

        case 'fa-linkedin':
            window.open('https://www.linkedin.com/in/sneheshthattil/')
            break;

        case 'fa-stack-overflow':
            window.open('https://stackoverflow.com/users/22690700/snehesh-thattil?tab=profile')
            break;

        case 'fa-twitter':
            window.open('https://twitter.com/sneheshthattil')
            break;

        case 'fa-instagram':
            window.open('https://www.instagram.com/snehesh.insta')
            break;

        case 'fa-youtube':
            window.open('https://www.youtube.com/@sneheshthattil9089')
            break;

        default:
            console.log(redirectTo)
            alert('something went wrong about this profile')
    }
}