const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedContainer = document.getElementById("completed-container");
function addTask() {
  if (inputBox.value === "") {
    alert("Bạn cần viết gì đó!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let spanDelete = document.createElement("span");
    spanDelete.innerHTML = "\u00d7";
    spanDelete.className = "delete";
    li.appendChild(spanDelete);
    let spanEdit = document.createElement("span");
    spanEdit.innerHTML = "\u270E";
    spanEdit.className = "edit";
    li.appendChild(spanEdit);
  }
  inputBox.value = "";
  saveData();
}
function resetList() {
  listContainer.innerHTML = "";
  localStorage.removeItem("data");
}
inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      completedContainer.appendChild(e.target);
      saveData();
    } else if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();
      saveData();
    } else if (e.target.classList.contains("edit")) {
      let li = e.target.parentElement;
      let currentText = li.firstChild.textContent;
      let newText = prompt("Sửa nội dung:", currentText);
      if (newText !== null && newText !== "") {
        li.firstChild.textContent = newText;
        saveData();
      }
    }
  },
  false
);
completedContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();
      saveData();
    } else if (e.target.classList.contains("edit")) {
      let li = e.target.parentElement;
      let currentText = li.firstChild.textContent;
      let newText = prompt("Sửa nội dung:", currentText);
      if (newText !== null && newText !== "") {
        li.firstChild.textContent = newText;
        saveData();
      }
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
  localStorage.setItem("completedData", completedContainer.innerHTML);
}
function showViec() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
  completedContainer.innerHTML = localStorage.getItem("completedData") || "";
}
showViec();
