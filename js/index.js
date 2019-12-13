alert ('hello world');
alert ('Welcome in my shop');
window.onload = function() {
let todoList = [];

document.getElementById('add').onclick = function() {
    let d = document.getElementById('in').value ;

 let temp = {};
 temp.todo = d;
 temp.check = false;
let i = todoList.length;
todoList[i] = temp;
console.log(todoList);
out();
}

function out() {
    let out ='';
    for (let key in todoList) {
        out += todoList[key].todo + '<br>' ;
    }
    document.getElementById('out').innerHTML = out;

}
}

