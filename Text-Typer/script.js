const typeWriter = document.querySelector("#type-writer");

const texts = ["No one", "No Two", "No Three", "No Four", "No Five"];
let charIndex = 0
let textsIndex = 0;

const Type = () => {
    if (charIndex < texts[textsIndex].length){
        typeWriter.innerHTML += texts[textsIndex].charAt(charIndex);
        charIndex ++;

        setTimeout(Type, 150);
    } else  {
       setTimeout(Erase, 150);
    }
}

const Erase = () =>{
    if (typeWriter.innerHTML.length > 0){
        typeWriter.innerHTML = typeWriter.innerHTML.slice(0, -1);

        setTimeout(Erase, 150);
    } else{
        textsIndex = (textsIndex + 1) % texts.length;
        charIndex = 0;

        setTimeout(Type, 100)
    }
}
window.onload = Type()