/*this code below is a function similar to function invertcolor(){

}
*/
const invertColor = (event) => {
    const target = event.target
    const parentRow = target.parentElement.parentElement
    parentRow.style.backgroundColor = "black";
    parentRow.style.color = "white";
}