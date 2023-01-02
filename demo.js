// console.log('Test file')// console.log(document.domain);
// // console.log(document.URL);
// // console.log(document.title);
// // // document.title = "123"
// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.all);
// // console.log(document.all[10]);
// // // document.all[10].textContent = 'Hello';
// // console.log(document.forms);

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText = "Goodbye";
// // headerTitle.innerHTML = '<h3>Hello</h3>'


// headerTitle.style.borderBottom = 'solid 3px #000';
// headerTitle.style.fontWeight = "bold";
// headerTitle.style.color = "green";


// //GETELEMENTSBYCLASSNAME//

// var  items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';


// //gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor = '#f4f4f4';

// }

// items[2].style.backgroundColor = 'green';
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
//     items[i].style.color = 'red';
// }

//GETELEMENTS BY TAG//

var  li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';


//gives error
//items.style.backgroundColor = '#f4f4f4';

for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor = '#f4f4f4';

}

// items[2].style.backgroundColor = 'green';
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
//     items[i].style.color = 'red';
// }

//by class name edit as new li element has no class it will not effect it
// var  items = document.getElementsByClassName('list-group-item');
// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor = 'yellow';

// }


//by tag edit it will effect all li tag irrespective of class name
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor = 'yellow';

}