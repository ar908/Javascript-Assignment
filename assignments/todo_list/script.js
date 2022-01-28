
var todo =document.querySelector("div.todos")
var input = document.querySelector("input")
var btn = document.querySelector("button")
var count = 0
btn.addEventListener("click",add)

function add(){
    var tag = document.createElement("p")
    tag.innerHTML=input.value;
    tag.setAttribute("key",count)
    todo.appendChild(tag)
   input.value="" 
   count += 1
   tag.addEventListener("click",remove)
   function remove(e){
       e.target.remove()
   }
}
