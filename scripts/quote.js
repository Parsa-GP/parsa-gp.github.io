async function fetch_quotes(fn) {
	try {
		const response = await fetch(new URL(fn, window.location.href).href)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		const data = await response.json()
		console.log("Quotes fetched successfully!")
		quote_loader(data)
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

function quote_loader(q) {
	rand = q[Math.floor(Math.random() * q.length)]
	qe = document.getElementById("quote")
	qe.innerHTML = "“ "+ rand.text + "  ”\n<br><br>\n - "+rand.name+", "+rand.year+" "
}
