function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested").querySelector(".target");
}

function increaseRankBy(n) {
  var list = document.querySelectorAll(".ranked-list");
  for (var x of list) {
    x.innerHTML = parseInt(x.innerHTML, 10) * n;
  }
  
}

function deepestChild() {
  var curr = document.querySelector("#grand-node");
  var child = curr.querySelector("div");
  console.log(child);
  while (child) {
    curr = child;
    child = curr[0];
    console.log("loop")
  }
  return curr;
}
