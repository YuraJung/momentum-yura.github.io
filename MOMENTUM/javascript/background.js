const images = ["life.jpeg","sea.jpg","spain.jpg"];
const randomImg = images[Math.floor(Math.random()*images.length)];

const bgimages = document.createElement("img");
bgRandom = `img/${randomImg}`;
bgimages.classList.add("background_point");

document.body.style.backgroundImage="url('"+ bgRandom +"')";