let api = "/gh-blog"


function home() {
		alert("Home!!")
}

function github() {
		window.location.href = "https://github.com/parsa-gp"
}

function about() {
		alert("About!!")
}

function pall() {
		alert("All Posts!!")
}


async function fetchData() {
	try {
		const response = await fetch(new URL(api+'/data.json', window.location.href).href)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		const data = await response.json()
		console.log("Data fetched successfully!")
		loopThroughData(data)
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

function loopThroughData(data) {
	for (const item of data) {
		const { type, title, category, date, images, description, content } = item

		post = document.createElement("div")
		post.classList = ["post"]

		post_topbar = document.createElement("div")
		post_topbar.classList = ["p-top"]

		post_title = document.createElement("span")
		post_title.classList = ["p-title"]

		post_tag_container = document.createElement("div")
		post_tag_container.classList = ["p-tags"]

		post_tag = document.createElement("span")
		post_tag.classList = ["p-tag"]

		post_time = document.createElement("span")
		post_time.classList = ["p-time"]



		post_title.innerHTML = title
		post_tag.innerHTML = category
		post_time.innerHTML = date


		post_tag_container.appendChild(post_tag)
		post_tag_container.appendChild(post_time)

		post_topbar.appendChild(post_tag_container)
		post_topbar.appendChild(post_title)

		post.appendChild(post_topbar)


		if (typeof content != "undefined") {
			pcontent = document.createElement("span")
			pcontent.classList = ["p-text"]
			pcontent.innerHTML = content
			post.appendChild(pcontent)
		}

		if (typeof description != "undefined") {
			pdesc = document.createElement("span")
			pdesc.classList = ["p-text"]
			pdesc.innerHTML = description
			post.appendChild(pdesc)
		}

		if (images.length!=0) {
			pimgs = document.createElement("div")
			pimgs.classList = ["p-images"]
			post.appendChild(pimgs)
			
			for (const img of images) {
					pimg = document.createElement("img")
					pimg.classList = ["p-img"]
					pimg.src = api+"/assets/"+img
					pimg.loading="lazy"
					pimgs.appendChild(pimg)
			}

		}




		cont = document.getElementById("container")
		cont.appendChild(post)
	}
}


async function fetch_quotes() {
	try {
		const response = await fetch(new URL(api+"/quote.json", window.location.href).href)
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


document.addEventListener('DOMContentLoaded', () => {
	let hue = 0
	const increment = 0.75

	window.addEventListener('scroll', () => {
			hue = (hue + increment) % 360
			document.documentElement.style.setProperty('--hue', hue)
	})
})
fetchData()
fetch_quotes()

