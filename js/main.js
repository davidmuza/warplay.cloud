let open = document.querySelector('.header__burger-btn')
let menu = document.querySelector('.header__menu')
let close = document.querySelector('.header__menu-close')
let nav = document.querySelector('.header__nav-list')

open.onclick = function(e) {
	e.preventDefault()
	menu.classList.add('header__menu-active')
}

close.onclick = function(e) {
	e.preventDefault()
	menu.classList.remove('header__menu-active')
}

nav.addEventListener('click', function(event) {
	if (event.target && event.target.tagName == 'A') {
		menu.classList.remove('header__menu-active')
	}
})
