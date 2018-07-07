function init() {
	var btn = document.createElement('button')
	btn.className = "scroll_to_top"
	btn.id = 'scroll_to_top_btn'
	document.body.appendChild(btn)

	btn.addEventListener('click', () => {
		window.scrollTo(0, 0)
	})
}


document.addEventListener('scroll', () => {
	var btn = document.getElementById('scroll_to_top_btn')

	btn.className = window.scrollY > 200 ? 'scroll_to_top appear' : 'scroll_to_top'
})


init()