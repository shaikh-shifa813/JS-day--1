//QUESTION(3)//QUESTION(4)
const users = [
  { name: "ruhin", active: true },
  { name: "bushra", active: false },
  { name: "misba", active: true }
];
const userList = document.getElementById("userList");

// function to show list
function showUsers() {
  
  userList.innerHTML = "";

  //  loop 
  for (let i = 0; i < users.length; i++) {

    // create new li
    const li = document.createElement("li");
    li.innerText = users[i].name;

    // when user inactive
    if (users[i].active === false) {
      li.classList.add("inactive");
    }

    // button 
    const btn = document.createElement("button");
    btn.innerText = "Toggle Status";

    // button click
    btn.onclick = function () {
      // active / inactive change 
      users[i].active = !users[i].active;
      showUsers();
    };
    
    li.appendChild(btn);

    userList.appendChild(li);
  }
}
showUsers();

