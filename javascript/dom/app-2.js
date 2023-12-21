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
// const faClick = document.querySelectorAll(".fa-remove");
// faClick.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     e.preventDefault();
//     const currentElement = e.target;
//     currentElement.parentElement.parentElement.remove();
//   });
// });

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
  removeAllCollections.innerHTML = "";
});

// const ulListElement = document.querySelector('collection');

// const createLi = document.createElement('li');
// createLi.className = "collection-item";
// createLi.innerHTML = `List Item
// <a href="#" class="delete-item secondary-content">
//   <i class="fa fa-remove"></i>
// </a>`;

// console.log(createLi)

// let InputField = document.querySelector("#task");
// InputField.addEventListener('change', function(e){
//   e.preventDefault();
//   console.log('click')

// })

// const taskForm = document.querySelector("#task-form");
// taskForm.addEventListener("click", function (e) {
//   e.preventDefault();
//   const selectInputFields = document.querySelector("#task");
//   const inputValues = selectInputFields.value;
//   console.log(inputValues);
//   if (!inputValues) {
//     alert("Please Enter The Value");
//     return;
//   }

//   // Create Collections Items

//   const collectionAll = document.querySelector(".collection");
//   const collectionLITag = document.createElement("li");
//   collectionLITag.className = "collection-item";
//   collectionLITag.innerHTML = `${inputValues}
//   <a href="#" class="delete-item secondary-content">
//                     <i class="fa fa-remove"></i>
//                   </a>
//   `;
//   console.log(collectionLITag);
//   collectionAll.append(collectionLITag);
//   selectInputFields.value = "";

//   // Remove Items Fuctions

//   // const itemsList = document.querySelector('.collection-item');
//   collectionAll.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (e.target.classList.contains("fa-remove")) {
//       const currentElement = e.target;
//       currentElement.parentElement.parentElement.remove();
//       // if (confirm("Are you sure?")) {
//       // }
//     }
//   });

// });

// Submit Form

const inputFormSubmt = document.querySelector("#task-form");
inputFormSubmt.addEventListener("submit", function (e) {
  e.preventDefault();
  const selectTaskInputField = document.querySelector("#task");
  const taskInputValue = selectTaskInputField.value;
  if (!taskInputValue) {
    alert("please enter the value");
    return;
  }
  const collection = document.querySelector(".collection");
  const createElementLi = document.createElement("li");
  createElementLi.className = "collection-item";
  createElementLi.innerHTML = `${taskInputValue}
  <a a href="#" class="delete-item secondary-content" >
    <i class="fa fa-remove"></i>
  </a>`;
  console.log(createElementLi);
  collection.append(createElementLi);
  selectTaskInputField.value = "";

  collection.addEventListener("click", function (e) {
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
});
