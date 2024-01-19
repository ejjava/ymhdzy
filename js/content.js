
document.addEventListener("DOMContentLoaded", function() {
  var contentData = [
    {
      title: "520",
      text: "520!",
      image: "",
      link: "./archives/2023/1231.html"
    },
   
  ];

  var cardContainer = document.getElementById('cardContainer');
  var cardTemplate = document.getElementById('cardTemplate');

  contentData.forEach(function(data) {
    var newCard = cardTemplate.cloneNode(true);
    newCard.removeAttribute('id');
    newCard.querySelector('.card-title').textContent = data.title;
    newCard.querySelector('.card-text').textContent = data.text;

    var imageUrl = data.image ? data.image : "https://www.dmoe.cc/random.php";
    var randomUrl = imageUrl + "?random=" + Math.random();
    newCard.querySelector('.card-img-top').setAttribute("src", randomUrl);

    var linkElement = newCard.querySelector('.btn');
    linkElement.setAttribute("href", data.link);

    cardContainer.appendChild(newCard);
  });

  // 移除卡片模板
  cardTemplate.remove();
});