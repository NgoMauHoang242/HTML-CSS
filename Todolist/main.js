const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
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
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
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
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showViec() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showViec();
