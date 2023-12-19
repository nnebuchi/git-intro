const invertColor = (event) => {
    const target = event.target
    const parentRow = target.parentElement.parentElement
    parentRow.style.backgroundColor = "black";
    parentRow.style.color = "white";
    // alert("Clicked")
}

/*
function invertColor(){

}
*/