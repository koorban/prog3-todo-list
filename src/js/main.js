let list = [
  {
    id: 1,
    name: "Replicar el eje del profe",
    done: false,
  },
  {
    id: 2,
    name: "Replicar el eje del profe 2",
    done: false,
  },
  {
    id: 3,
    name: "Replicar el eje del profe 3",
    done: false,
  },
  {
    id: 4,
    name: "Replicar el eje del profe 4",
    done: false,
  },
];

const completedList = [];
const listContainer = document.querySelector("#list-content");
const listContainerCompleted = document.querySelector("#list-completed");

paintList(list);

function createTask() {
  const input = document.querySelector("#task-value").value;
  list.push({
    id: list.length + 1,
    name: input,
    done: false,
  });

  paintList(list);
};

const checkTask = (checkbox, id) => {
  const task = list.find((element) => {
    return element.id === id;
  });
  task.done = checkbox.checked;
  findCompletedTodo(task);
};

function findCompletedTodo(task) {
  let completedTask = list.filter(
    (element) => {
      return element === task
    }
  );
  addCompletedTodoList(completedTask);
};

function addCompletedTodoList(item) {
  const completed = item[0];
  completedList.push({
    id: completed.id,
    name: completed.name,
    done: completed.done
  });
  paintCompletedList(completedList);
};

function paintCompletedList(lst) {
  let res = '';
  lst.forEach((element) => {
    res += renderCompletedListItem(element);
  });
  listContainerCompleted.innerHTML = res;
};

function paintList(lst) {
  let res = "";
  lst.forEach((element) => {
    res += renderListItem(element);
  });
  listContainer.innerHTML = res;
};

function renderListItem(item) {
  const isDone = item.done ? "is-done" : "";
  const checked = item.done ? "checked" : "";
  return `<li class="list-group-item list-item ${isDone}">
              <input type="checkbox" ${checked} aria-label="Checkbox for following text input" onclick="checkTask(this, ${item.id})"> ${item.name}
          </li>`;
};

function renderCompletedListItem(item) {
  const isDone = item.done ? "is-done" : "";
  return `<li class="list-group-item list-item ${isDone}">
            ${item.name}
          </li>`;
}

