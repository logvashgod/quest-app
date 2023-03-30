const todoItem = document.querySelector(".todo-item");
const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".btn-add");
const deleteBtn = document.querySelector(".btn-dlt");
const bodY = document.querySelector("body");
const load = document.querySelector(".btn-load");

const quests = [];

function addQuest(text) {
  const quest = {
    text,
    done: false,
    id: `${Math.random() * 100}`,
  };
  quests.push(quest);
}

function finishQuest(id) {
  quests.forEach((quest) => {
    if (quest.id === id) {
      quest.done = true;
    }
  });
}

function render() {
  let html = "";
  quests.forEach((quest) => {
    if (quest.done) {
      return;
    }
    html += `
        <div>${quest.text}</div>
        <button data-id="${quest.id}">Done</button>
        `;
  });
  todoItem.innerHTML = html;
}

addBtn.addEventListener("click", () => {
  const text = todoInput.value;
  addQuest(text);
  render();
});

todoItem.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  const id = event.target.dataset.id;
  finishQuest(id);
  render();
  console.log("HHAH");
});

function saveProgress() {
  localStorage.setItem("do-list", JSON.stringify(quests));
}

function loadProgress() {
  const savedQuests = localStorage.getItem("do-list");
  if (savedQuests) {
    quests = JSON.parse(savedQuests);
    render();
  }
}

bodY.addEventListener("click", () => {
  saveProgress();
});

todoInput.addEventListener("focus", () => {
  todoInput.value = "";
});

load.addEventListener("click", () => {
  loadProgress();
});
