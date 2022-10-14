const btn = document.querySelector('.menu')
const navLink = document.querySelector('.nav-link')
const switchBtn = document.querySelector('.switch-btn')
const darkMood = document.querySelector('.icon-dark')
const lightMood = document.querySelector('.icon-light')

btn.addEventListener('click', () => {
	navLink.classList.toggle('show-links')
	btn.classList.toggle('open')
	switchBtn.classList.toggle('show-links')
})

switchBtn.addEventListener('click', () => {
	darkMood.classList.toggle('off')
	lightMood.classList.toggle('off')
})
