const inputField = document.querySelector("#inputField");
const listContainer = document.querySelector('.list-container');
const counter = document.querySelector('#counter');

console.log("\u274C")

const addTask = () => {
    if (inputField.value == ''){
        alert("The input field can't be Empty!!!");
    } else{
        let li = document.createElement("Li");
        
        counter.innerText++;
        listContainer.appendChild(li);
        li.innerText = inputField.value;
        inputField.value = '';

        let span = document.createElement('span');
        li.appendChild(span);
        span.textContent = '\u2716';

        li.addEventListener('click', (e) => {
            if(e.target === span){
                li.remove();
                counter.innerText--;
            } else{
                li.classList.toggle('checked');
            }
        })
    }
    
}
