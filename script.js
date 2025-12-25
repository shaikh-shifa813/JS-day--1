// activity store 
let activities = [];

// elements
const input = document.getElementById("activityInput");
const addBtn = document.getElementById("addBtn");
const error = document.getElementById("error");
const activityList = document.getElementById("activityList");

const totalEl = document.getElementById("total");
const completedEl = document.getElementById("completed");
const pendingEl = document.getElementById("pending");

// disable 
input.addEventListener("keyup", function () {
  if (input.value.trim() == "") {
    addBtn.disabled = true;
  } else {
    addBtn.disabled = false;
  }
});

// add activity button
addBtn.addEventListener("click", function () {

let name = input.value.trim();

  if (name == "") {
    error.innerText = "Please enter activity";
    return;
  }

  error.innerText = "";

let activity = {
    name: name,
    status: "Pending",
    time: new Date().toLocaleString()
  };

activities.push(activity);

input.value = "";
addBtn.disabled = true;

  showActivities();
});

// activity cards
function showActivities() {
  activityList.innerHTML = "";

for (let i = 0; i < activities.length; i++) {

    let card = document.createElement("div");
    card.className = "card";

    if (activities[i].status === "Completed") {
      card.className = "card completed";
    }

    let title = document.createElement("h3");
    title.innerText = activities[i].name;

    let status = document.createElement("p");
    status.innerText = "Status: " + activities[i].status;

    let time = document.createElement("p");
    time.innerText = activities[i].time;

    let btn = document.createElement("button");
    btn.innerText = "Toggle Status";

    btn.onclick = function () {
      toggleStatus(i);
    };

    card.appendChild(title);
    card.appendChild(status);
    card.appendChild(time);
    card.appendChild(btn);
    activityList.appendChild(card);
  }
  updateStats();
}

// status change function
function toggleStatus(index) {
  if (activities[index].status == "Pending") {
    activities[index].status = "Completed";
  } else {
    activities[index].status = "Pending";
  }

  showActivities();
}

// stats update function
function updateStats() {

  let total = activities.length;
  let completed = 0;

  for (let i = 0; i < activities.length; i++) {
    if (activities[i].status == "Completed") {
      completed++;
    }
  }

  let pending = total - completed;
  totalEl.innerText = total;
  completedEl.innerText = completed;
  pendingEl.innerText = pending;
}
