let api = "/gh-blog";


function home() {
    alert("Home!!")
}

function github() {
    window.location.href = "https://github.com/parsa-gp";
}

function about() {
    alert("About!!")
}

function pall() {
    alert("All Posts!!")
}


async function fetchData() {
  try {
    const response = await fetch(new URL(api+'/data.json', window.location.href).href);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data fetched successfully!");
    loopThroughData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function loopThroughData(data) {
  for (const item of data) {
    const { title, category, date, images, description } = item;





    post = document.createElement("div")
    post.classList = ["post"];

    ptop = document.createElement("div")
    ptop.classList = ["p-top"];

    ptitle = document.createElement("span")
    ptitle.classList = ["p-title"];

    ptags = document.createElement("div")
    ptags.classList = ["p-tags"];

    ptag = document.createElement("span")
    ptag.classList = ["p-tag"];

    ptime = document.createElement("span")
    ptime.classList = ["p-time"];

    pimgs = document.createElement("div")
    pimgs.classList = ["p-images"];

    pdesc = document.createElement("span")
    pdesc.classList = ["p-desc"];

    ptitle.innerHTML = title
    ptag.innerHTML = category
    ptime.innerHTML = date
    pdesc.innerHTML = description


    ptags.appendChild(ptag)
    ptags.appendChild(ptime)

    ptop.appendChild(ptags)
    ptop.appendChild(ptitle)

    post.appendChild(ptop)
    post.appendChild(pimgs)
    post.appendChild(pdesc)


    for (const img of images) {
        pimg = document.createElement("img")
        pimg.classList = ["p-img"];
        pimg.src = api+"/assets/"+img;
        pimg.loading="lazy"
        pimgs.appendChild(pimg)
    }


    cont = document.getElementById("container")
    cont.appendChild(post)
  }
}
document.addEventListener('DOMContentLoaded', () => {
  let hue = 0;
  const increment = 0.75;

  window.addEventListener('scroll', () => {
      hue = (hue + increment) % 360;
      document.documentElement.style.setProperty('--hue', hue);
  });
});
fetchData();
