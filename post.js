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
