document.getElementById('form-id').addEventListener('submit', function(e)
{
  e.preventDefault();
  
  const amount = document.getElementById('expenseamount').value;
  const discription = document.getElementById('discription').value;
  const catageory = document.getElementById("catageory-id").value;
  
  let userdata={
    amount,
    discription,
    catageory
  }
  

  let users = JSON.parse(localStorage.getItem('users')) || [];
  
   if (!Array.isArray(users)) {
    users = [];
  }
  users.push(userdata);
  
  localStorage.setItem('users' , JSON.stringify(users));
  
  displaydata();
  
  
});

function displaydata(){
  
  let display = document.getElementById('result');
  display.innerHTML='';
  
  let users= JSON.parse(localStorage.getItem('users'))|| [];
  
  
  
  if (Array.isArray(users)) {
    
    users.forEach((user,index)=>{
    const li= document.createElement('li');
    
    li.innerHTML=`${user.amount}-${user.discription}-${user.catageory}
    <button onclick="editUser(${index})">Edit</button>
    <button onclick="deleteUser(${index})">Delete</button>`;
    
    display.appendChild(li);
    
    });
     
  }
  
}



function deleteUser(index){
  
  let users= JSON.parse(localStorage.getItem('users'));
  
  users.splice(index,1);
  localStorage.setItem("users",JSON.stringify(users));
  
  displaydata();
}
  

function editUser(index){
  
  let users = JSON.parse(localStorage.getItem('users'));
  let user=users[index];
  document.getElementById('expenseamount').value= user.amount;
  document.getElementById('discription').value= user.discription;
  document.getElementById('catageory-id').value= user.catageory;
  
  deleteUser(index);
}
  displaydata();
