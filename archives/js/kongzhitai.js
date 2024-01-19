
function toggleCard() {
  var card = document.getElementById("kongzhi");
  card.classList.toggle("open");
}

function saveImageUrl() {
  var imageUrlInput = document.getElementById("imageUrlInput");
  var imageUrl = imageUrlInput.value;

  // 保存图片地址到本地，这里使用localStorage
  localStorage.setItem("backgroundImageUrl", imageUrl);

  // 更新背景图片
  var body = document.querySelector("body");
  body.style.setProperty("--background-image-url", "url(" + imageUrl + ")");
}

// 检查是否有保存的背景图片地址
var savedImageUrl = localStorage.getItem("backgroundImageUrl");
if (savedImageUrl) {
  var body = document.querySelector("body");
  body.style.setProperty("--background-image-url", "url(" + savedImageUrl + ")");
}
