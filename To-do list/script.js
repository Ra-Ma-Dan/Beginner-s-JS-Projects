const inputField = document.querySelector("#inputField");
const listContainer = document.querySelector('.list-container');
const counter = document.querySelector('#counter');

//console.log("\u274C")

const addTask = () => {
    if (inputField.value === ''){
        alert("The input field can't be Empty!!!");
    } else{
        let li = document.createElement("li");
        
        counter.innerText++;
        listContainer.appendChild(li);
        li.innerHTML = inputField.value;
        
        let span = document.createElement('span');
        li.appendChild(span);
        span.innerHTML = '\u2716';
    }
    saveTask()
    inputField.value = '';
    //console.log(listContainer.innerHTML);
    //console.log(counter.innerText);
    
}
listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        counter.innerText--;
    } else if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
    saveTask()
})
    
const saveTask = () =>{
    localStorage.setItem('data', listContainer.innerHTML)
    localStorage.setItem('counter', counter.innerText)
}


const showTask = () =>{
    listContainer.innerHTML = localStorage.getItem('data')
    counter.innerText = localStorage.getItem('counter')
}
showTask()
