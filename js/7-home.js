var elUnOrderList = document.querySelector("[data-unorder-list]");
var imgUrl = "https://image.tmdb.org/t/p/w500";

for (var i = 0; i < movies.length; i++) {
  movie = movies[i];
  var elLi = document.createElement("li");
  var elImage = document.createElement("img");
  var elH3 = document.createElement("h3");
  elImage.src = `${imgUrl}${movie.poster_path}`;
  elH3.textContent = `${movie.title} - ${movie.vote_average}  ⭐️`;

  elLi.appendChild(elH3);
  elLi.appendChild(elImage);

  elLi.style.listStyleType = "none";
  elUnOrderList.style.display = "flex";
  elUnOrderList.style.flexWrap = "wrap";
  elUnOrderList.style.gap = "40px";
  elH3.style.textAlign = "center";
  elH3.style.fontSize = "30px";
  elImage.style.cursor = "pointer";
  elH3.style.cursor = "pointer";

  elUnOrderList.appendChild(elLi);
}
