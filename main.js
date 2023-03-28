const todoItem = document.querySelector(".todo-item");
const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".btn-add");
const deleteBtn = document.querySelector(".btn-dlt");

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
