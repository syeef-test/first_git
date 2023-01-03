
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const userlist = document.querySelector('#users');


form.addEventListener('submit',onSubmit);


userlist.addEventListener('click', removeItem);

function onSubmit(e){
    e.preventDefault();
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${username.value}:${email.value}:${phone.value}`));
    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));
    
    li.appendChild(deletebtn);
    userlist.appendChild(li);

    myobj = {
        username:username.value,
        email:email.value,
        phone:phone.value
    }

    ser_obj = JSON.stringify(myobj);

    localStorage.setItem(email.value,ser_obj);
    console.log(JSON.parse(localStorage.getItem('myobj')));

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        var arr = li.innerText.split(':');//convert string to array
        console.log(arr[1]);//second element is emial
        localStorage.removeItem(arr[1]);//remvoe local storage value by email
        userlist.removeChild(li);
      }
    }
  }

