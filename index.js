
const container = document.querySelector('.container');
const addBtn = document.querySelector('.addButton');

function createTodo(){
    let div = document.createElement('div');
    div.classList.add('item');
    container.appendChild(div);

    let innerDiv = document.createElement('div');
    div.appendChild(innerDiv);

    innerDiv.classList.add('item_input');
    innerDiv.innerHTML = document.querySelector('.input').value;

    let btnContainer = document.createElement('div');
    btnContainer.setAttribute('class', 'btn-container');
    btnContainer.style.marginTop = '10px'
    div.appendChild(btnContainer);

    let editBtn = document.createElement('button');
    editBtn.innerText = 'edit';
    editBtn.classList.add('editButton');
    btnContainer.appendChild(editBtn);

    editBtn.addEventListener('click', ()=>{    
        innerDiv.contentEditable = true;
        editBtn.innerText = 'done'
        editBtn.addEventListener('click', ()=>{        
            editBtn.innerText = 'edit';
            innerDiv.contentEditable = false;
        })

    })

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'delete';
    deleteBtn.classList.add('deleteButton');
    btnContainer.appendChild(deleteBtn);  
    
    deleteBtn.addEventListener('click', ()=>{
        container.removeChild(div);
    })

    
}
function todo(){
    //creating the todo block
    if(document.querySelector('.input').value===""){
        alert("Empty Todo");
        return;
    }else{
        createTodo();
        document.querySelector('.input').value = ''; 
    }    
      
}
addBtn.addEventListener('click', todo);


