document.querySelector('#myId').addEventListener('click', function(){
    alert("Clicked button")
})            
/*function greet(){
    alert('Welcome')
}
document.querySelector('#myId').addEventListener('click', greet)
*/
document.querySelector('#react').addEventListener('click', function(e){
    alert(e.target.innerHTML)
})

function color(){
    const bttnStyles = getComputedStyle(document.querySelector("#color"))
    const bttnBg = bttnStyles.backgroundColor
    alert(bttnBg)
}
document.querySelector('#color').addEventListener('click', color)

function background(){
    const bttnStyles = getComputedStyle(document.querySelector("#color"))
    const bttnBg = bttnStyles.backgroundColor
    alert(`The background-Color for the button is `+ bttnBg)
}
document.querySelector('#backgrand').addEventListener('click', background)
         