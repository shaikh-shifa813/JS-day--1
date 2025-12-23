//QUESTION(1)
let user = {
    id:10,
    name:"shifa",
    email:"shifa@gmail.com",
    role:"intern",
    isActive:true
};

//update isActive
user.isActive=false;

//print All values
console.log(user);

//loop
for(key in user){
    console.log("key:", key,"value:", user[key]);
}

//QUESTION(2)
const users = [
    {id:1,name:'shahin',email:'shahin@gmail.com',role:'intern',isActive:true},
    {id:2,name:'ruhin',email:'ruhin@gmail.com',role:'hr',isActive:true},
    {id:3,name:'misba',email:'misba@gmail.com',role:'manager',isActive:true},
    {id:4,name:'rishi',email:'rishi@gmail.com',role:'intern',isActive:false},
    {id:5,name:'rahul',email:'rahul@gmail.com',role:'employe',isActive:false}
];
console.log(users);

//using filter() 
const activeusers = users.filter(user => user.isActive === true);
console.log(activeusers);

//using map
const names = users.map(user => user.name);
console.log(names);

//using find()
const userbyid = users.find(user => user.id === 4);
console.log(userbyid);

