async function fetchData() {
	const post_file = new URL(document.location.href).search.substring(1);

	const post_info = post_file.split(":")
	const post_filename = post_info[0]
	const post_id = post_info[1]
	
	try {
		const response = await fetch(new URL(post_filename+".json", window.location.href).href)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		const data = await response.json()
		console.log("Data fetched successfully!")

		parseData(data[post_id])

	} catch (error) {
		console.error('Error fetching data:', error)
	}
}


function parseData(data) {
	const { title, category, date, description, content } = data

	document.getElementsByTagName("title")[0].textContent = title+" - Parsa's Personal Blog"

	post_title = document.getElementById("p-title")
	post_title.innerHTML = title

	post_topbar = document.getElementById("p-top")

	post_tag_container = document.getElementById("p-tags")

	post_tag = document.getElementById("p-tag")
	post_tag.innerHTML = category

	post_time = document.getElementById("p-time")
	post_time.innerHTML = date


	ptext = document.getElementById("p-text")
	if (typeof content != "undefined") {
		post_text = content
	} else if (typeof description != "undefined") {
		post_text = description
	}
	var converter = new showdown.Converter()
	ptext.innerHTML = converter.makeHtml(post_text)
	post.appendChild(ptext)
}

document.addEventListener('DOMContentLoaded', () => {
	let hue = 280
	const increment = 0.75

	window.addEventListener('scroll', () => {
			hue = (hue + increment) % 360
			document.documentElement.style.setProperty('--hue', hue)
	})
})

fetch_quotes("../quotes.json")
fetchData()

