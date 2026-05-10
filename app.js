const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");

let images = JSON.parse(localStorage.getItem("bdImages")) || [];

// afficher images
function render() {
  gallery.innerHTML = "";

  images.forEach((imgSrc) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    gallery.appendChild(img);
  });

  localStorage.setItem("bdImages", JSON.stringify(images));
}

// upload
fileInput.addEventListener("change", (e) => {
  const files = e.target.files;

  for (let file of files) {
    const reader = new FileReader();

    reader.onload = function(event) {
      images.push(event.target.result);
      render();
    };

    reader.readAsDataURL(file);
  }
});

render();


// SERVICE WORKER
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
