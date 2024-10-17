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
	console.log(data)
	post = document.createElement("div")
	post.classList = "post"


	post_title.innerHTML = title

	post_tag_container.appendChild(post_tag)


	if (typeof content != "undefined") {
		pcontent = document.createElement("a")
		pcontent.onclick = function(){open_article(index)}
		pcontent.classList = "p-text p-text-article"
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

	cont = document.getElementById("container")
	cont.appendChild(post)
}

fetchData()