const taskForm = document.querySelector("#task-form");
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputFields = document.querySelector("#task");
  const inputValues = inputFields.value;

  if (!inputValues) {
    alert("Please Enter the Value");
    return;
  }

  // Collection value Enter

  const collection = document.querySelector(".collection");

  const createElementLi = document.createElement("li");
  createElementLi.className = "collection-item";
  createElementLi.innerHTML = `${inputValues}
    <a href="#" class="delete-item secondary-content">
    <i class="fa fa-remove"></i>
  </a>`;
  collection.append(createElementLi);
  inputFields.value = "";

  //Delete List Li Loop
  const collectionList = document.querySelector(".collection");
  collectionList.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("fa-remove")) {
      const currentElement = e.target;
      if (confirm("Are you sure?")) {
        currentElement.parentElement.parentElement.remove();
      }
    }
  });

  const filterItem = document.querySelector("#filter");
  filterItem.addEventListener("keyup", function (e) {
    e.preventDefault();
    console.log("filter");
    const currentElementFilter = e.target;
    const filterInputValue = currentElementFilter.value;
    const selectAllCollection = document.querySelectorAll(".collection-item");
    selectAllCollection.forEach((item) => {
      if (
        item.innerText.toLowerCase().indexOf(filterInputValue.toLowerCase()) ===
        -1
      ) {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    });
  });

  const clearBtn = document.querySelector(".clear-tasks");
  clearBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const collectionList = document.querySelector(".collection");
    if(confirm('Are you sure')){
      collection.innerHTML = ""
    }
  });
});
