const taskForm = document.querySelector("#addForm");
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log('work')
  const addItemInput = document.querySelector("#item");
  const addItemInputValue = addItemInput.value;
  // console.log(addItemInputValue);
  if (!addItemInputValue) {
    alert("Please Enter The Add Item");
    return;
  }
  console.log(addItemInputValue);
  addItemInput.value = "";

  // Items
  const items = document.querySelector("#items");
  const createLi = document.createElement("li");
  createLi.className = "list-group-item";
  createLi.innerHTML = `${addItemInputValue}
  <button class="btn btn-danger btn-sm float-end delete">x</button>`;
  items.append(createLi);

  //Delele List-Group-Item
  const deltBtn = document.querySelectorAll(".delete");
  deltBtn.forEach(function (items) {
    items.addEventListener("click", function (e) {
      e.preventDefault();
      items.parentElement.parentElement.remove();
    });
  });
  // Clear All Collections in Items

  const clearBtn = document.querySelector("#clear-button");
  clearBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const allItems = document.querySelector("#items");
    allItems.innerHTML = "";
  });

  // Search All list Groups Items

  const filterItem = document.querySelector("#filter");
  filterItem.addEventListener("keyup", function (e) {
    const currentElementFilter = e.target;
    const filterInputValue = currentElementFilter.value;
    const selectItems = document.querySelectorAll(".list-group-item");
    if (filterInputValue)
      selectItems.forEach((item) => {
        if (
          item.innerText
            .toLowerCase()
            .indexOf(filterInputValue.toLowerCase()) === -1
        ) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
      });
  });
});
