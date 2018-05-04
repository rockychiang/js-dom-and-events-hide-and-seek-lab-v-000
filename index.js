function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("div#nested div div div div.target")
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll("main#app ul.ranked-list li");
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + 1;
  }
}