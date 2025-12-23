//QUESTION(3)//QUESTION(4)
const users = [
  { name: "ruhin", active: true },
  { name: "bushra", active: false },
  { name: "misba", active: true }
];
const userList = document.getElementById("userList");

// function to show list
function showUsers() {

  // pehle list empty karo
  userList.innerHTML = "";

  // sab users ko loop karo
  for (let i = 0; i < users.length; i++) {

    // naya li banao
    const li = document.createElement("li");
    li.innerText = users[i].name;

    // agar user inactive hai
    if (users[i].active === false) {
      li.classList.add("inactive");
    }

    // button banao
    const btn = document.createElement("button");
    btn.innerText = "Toggle Status";

    // button click
    btn.onclick = function () {
      // active / inactive change karo
      users[i].active = !users[i].active;
      showUsers();
    };

    // li ke andar button
    li.appendChild(btn);

    // ul ke andar li
    userList.appendChild(li);
  }
}

// page load par call
showUsers();
