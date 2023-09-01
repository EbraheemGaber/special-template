let landingPage = document.querySelector(".landing-page");
let imgsArray = ["img1.jpg", "img2.jpg", "img3.jpg"];

//get tandom number
setInterval(() => {
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(imgsArray[randomNumber]);

  landingPage.style.backgroundImage = 'url("' + imgsArray[randomNumber] + '")';
}, 3000);
document.querySelector(".toggle-gear .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("open");
};
