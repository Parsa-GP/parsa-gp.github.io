
document.addEventListener('DOMContentLoaded', () => {
	let hue = 280
	const increment = 0.75

	window.addEventListener('scroll', () => {
			hue = (hue + increment) % 360
			document.documentElement.style.setProperty('--hue', hue)
	})
	share()
})

fetch_quotes("../quotes.json")

