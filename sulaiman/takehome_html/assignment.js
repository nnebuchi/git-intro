const moreList = (event) => {

    const myList = document.getElementById('myList');
    const newList = document.createElement('li')
    const inputText = document.getElementById('inputText').value;
    newList.textContent = inputText;
    myList.appendChild(newList);
}



function  removeLastItem(event){
    const clear = document.getElementById('clear');
    const lastItem = clear.lastElementChild;
    if (lastItem){
        clear.removeChild(lastItem);
    }
}

function changeText (event) {

    const myParagraph = document.getElementById('myParagraph');
    const changeParagraph = document.createElement('p')
    const inputText = document.getElementById('writeText').value;
    myParagraph.textContent = inputText;
    
    
}