const subButton = document.querySelector("#task-button");

subButton.addEventListener("click", function (e) {
  e.preventDefault();
  const tastTitle = document.querySelector(".card-title");
  if (tastTitle.innerText === "Task List") {
    tastTitle.innerText = "Changed";
    subButton.classList.add("active");
  } else {
    tastTitle.innerText = "Task List";
    subButton.classList.remove("active");
  }
});

// Remove Ul Li div
const faClick = document.querySelectorAll(".fa-remove");
faClick.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const currentElement = event.target;
    currentElement.parentElement.parentElement.remove();
  });
});

const selectAllElement = document.querySelectorAll("ul li:nth-child(odd)");
selectAllElement.forEach(function (item) {
  item.style.backgroundColor = "rgb(193 193 193 / 28%)";
});
const evenElements = document.querySelectorAll("ul li:nth-child(even)");
evenElements.forEach(function (item) {
  item.style.backgroundColor = "#fff";
});

// Remove Ul Completely
const clearBtn = document.querySelector(".clear-tasks");
clearBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const removeAllCollections = document.querySelector(".collection");
  removeAllCollections.remove();
});

const inputField = document.querySelector("#task").value;
inputField.addEventListener("click", function (e) {
  e.preventDefault();
  const taskHead = document.querySelector("#task-title").innerHTML =
    inputField;

});
console.log(inputField);