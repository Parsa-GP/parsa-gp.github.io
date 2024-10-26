
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
		const response = await fetch(new URL('post/posts.json', window.location.href).href)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		const data = await response.json()
		console.log("Data fetched successfully!")

		for (const post_file of data) {
			const response = await fetch(new URL("post/"+post_file+".json", window.location.href).href)
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}
			const posts_data = await response.json()
			console.log("Data fetched successfully!")
			loopThroughData(posts_data, post_file)
		}
		
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

function open_article(id, index) {
	window.location.href = "post?"+id+":"+index
}


function loopThroughData(data, post_json_id) {
	for (const [index, item] of data.entries()) {
		const { title, category, date, images, description, content } = item

		post = document.createElement("div")
		post.classList = "post"

		post_topbar = document.createElement("div")
		post_topbar.classList = "p-top"

		post_title = document.createElement("span")
		post_title.classList = "p-title"

		post_tag_container = document.createElement("div")
		post_tag_container.classList = "p-tags"

		post_tag = document.createElement("span")
		post_tag.classList = "p-tag"

		post_time = document.createElement("span")
		post_time.classList = "p-time"


		post_title.innerHTML = title
		post_tag.innerHTML = category
		post_time.innerHTML = date

		post_tag_container.appendChild(post_tag)
		post_tag_container.appendChild(post_time)
		post_topbar.appendChild(post_title)
		post_topbar.appendChild(post_tag_container)
		post.appendChild(post_topbar)


		if (typeof content != "undefined") {
			pcontent = document.createElement("a")
			pcontent.onclick = function(){open_article(post_json_id, index)}
			pcontent.classList = "p-text"
			pcontent.innerHTML = content
			post.appendChild(pcontent)
		} else if (typeof description != "undefined") {
			pdesc = document.createElement("span")
			pdesc.classList = "p-text"
			pdesc.innerHTML = description
			post.appendChild(pdesc)
		}

		if (images.length!=0) {
			pimgs = document.createElement("div")
			pimgs.classList = "p-images"
			post.appendChild(pimgs)
			
			for (const img of images) {
				pimg = document.createElement("img")
				pimg.classList = "p-img"
				pimg.src = "assets/post_media/"+img
				pimg.loading="lazy"
				pimgs.appendChild(pimg)
			}

		}

		cont = document.getElementById("post-container")
		cont.appendChild(post)
	}
}


document.addEventListener('DOMContentLoaded', () => {
	let hue = 280
	const increment = 0.75

	window.addEventListener('scroll', () => {
			hue = (hue + increment) % 360
			document.documentElement.style.setProperty('--hue', hue)
	})
})
fetchData()
fetch_quotes("quotes.json")

