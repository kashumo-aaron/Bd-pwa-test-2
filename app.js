const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");

let images = JSON.parse(localStorage.getItem("bdImages")) || [];

// afficher images sauvegardées
function render() {
  gallery.innerHTML = "";

  images.forEach((img) => {
    const image = document.createElement("img");
    image.src = img;
    gallery.appendChild(image);
  });

  localStorage.setItem("bdImages", JSON.stringify(images));
}

// upload images
fileInput.addEventListener("change", (e) => {
  const files = e.target.files;

  for (let file of files) {
    const reader = new FileReader();

    reader.onload = function (event) {
      images.push(event.target.result); // base64 image
      render();
    };

    reader.readAsDataURL(file);
  }
});

render();