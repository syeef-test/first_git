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

// var  li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';


// //gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor = '#f4f4f4';

// }

// // items[2].style.backgroundColor = 'green';
// // for(var i=0;i<items.length;i++){
// //     items[i].style.fontWeight = 'bold';
// //     items[i].style.color = 'red';
// // }

// //by class name edit as new li element has no class it will not effect it
// // var  items = document.getElementsByClassName('list-group-item');
// // for(var i=0;i<items.length;i++){
// //     items[i].style.backgroundColor = 'yellow';

// // }


// //by tag edit it will effect all li tag irrespective of class name
// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor = 'yellow';

// }



//QUERSELECTOR//

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var item = document.querySelector('.list-group-item:last-child');
// item.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display='none';



//QUERYSELECTOR ALL//

var titles = document.querySelectorAll('.title');


console.log(titles);
titles[0].textContent = 'Hello';

var secondItem = document.querySelectorAll('li:nth-child(2)');
console.log(secondItem);
secondItem[0].style.color = 'green';


var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="#f4f4f4";
    even[i].style.backgroundColor="#ccc";
}