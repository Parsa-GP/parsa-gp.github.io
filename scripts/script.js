
function home() {
	alert("Home!!")
}

function github() {
	window.location.href = "https://github.com/parsa-gp"
}

function about() {
	window.location.href = "./about"
}

document.addEventListener('DOMContentLoaded', () => {
	let hue = 280
	const increment = 0.75

	window.addEventListener('scroll', () => {
			hue = (hue + increment) % 360
			document.documentElement.style.setProperty('--hue', hue)
	})
})
fetch_quotes("quotes.json")

