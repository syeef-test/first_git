
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const userlist = document.querySelector('#users');


form.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${username.value}:${email.value}:${phone.value}`));
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

