let post = document.getElementById("ButtonPost")
let clear = document.getElementById("ButtonClear")
let mark = document.getElementById("ButtonMark")
let del = document.getElementById("ButtonDelete")

post.addEventListener("click",TodoPost)
clear.addEventListener("click",TodoClear)
mark.addEventListener("click",TodoMark)
del.addEventListener("click",TodoDel)

function TodoPost(e) {
    e.preventDefault()
    //1 Obtener el texto del textarea
    let todo = document.getElementById("todoText").value
   
    //2 Necesito la referencia del placeholder
    let list = document.getElementById("todoList")
    let currentList = list.innerHTML
    list.innerHTML = currentList + `<input type ="checkbox" name="todo" /> ${todo} <br>  `
    document.getElementById("todoText").value = ""
}

function TodoClear() {
    let todos = document.getElementsByName("todo")
    for(let i=0; i<todos.length;i++){
        todos[i].checked=false;
    }
}

function TodoMark() {
    let todos = document.getElementsByName("todo")
    for(let i=0; i<todos.length;i++){
        todos[i].checked=true;
    }   
}

function TodoDel() {
    let list = document.getElementById("todoList")
    list.innerHTML=""
}