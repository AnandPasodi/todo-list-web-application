let todoForm=document.querySelector('.todo-form');
let todoInput=document.querySelector('.todo-input');
let todoList=document.querySelector('.todo-list');

function createBtn(text){
    const btn1=document.createElement('button');
    btn1.textContent=text
    return btn1;
}

todoList.addEventListener('click', function(event){
    const el=event.target;
    if(el.tagName==="BUTTON"){
        if(el.classList.contains('del-button')){
                el.parentNode.remove();
        }else{
            el.parentNode.style.textDecoration="line-through solid rgb(0, 0, 0)"
        }
    }
})

const apppendTodoListItems=(text)=>{
  const li=document.createElement('li');
  li.classList.add('todo-item')
  li.textContent=text;
  todoList.appendChild(li);

const btn=createBtn("Del");
btn.classList.add('del-button')
li.appendChild(btn);

const btn1=createBtn("Complet");
btn1.classList.add("complet-button");
li.appendChild(btn1);
}



todoForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    let value=todoInput.value;
    if(value !== ""){
        apppendTodoListItems(value)
        todoInput.value="";
    }else{

    }
})