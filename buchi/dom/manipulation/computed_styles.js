const navbar = document.getElementById("navbar")
const navStyles = getComputedStyle(navbar)
const navBg = navStyles.backgroundColor
console.log(navBg);
const tableHeading = document.querySelector("h2")
tableHeading.style.color='blue';
tableHeading.style.fontSize = '50px'

 const heroSubText = document.querySelector('.hero-content > p');
 heroSubText.textContent = "This is a place of learning and becoming"
 /*
 document.querySelector('.card-body').innerHTML = `<img src="images/galaxy.jpg" class="card-img" alt="">
 <p class="card-text">It is magic to behod the wonders of the universe... <a href="">Read More</a></p>`
 */

 /*
const cardBodies = document.querySelectorAll('.card-body')
cardBodies[1].innerHTML = `<img src="images/galaxy.jpg" class="card-img" alt="">
 <p class="card-text">It is magic to behod the wonders of the universe... <a href="">Read More</a></p>`;
*/

const services = [
    {
        image: "images/galaxy.jpg",
        description: "It is magic to behod the wonders of the universe"
    },
    {
        image: "images/spring.jpg",
        description: "Seasons are given for a reason and spring is not left out"
    },
    {
        image: "images/roll.jpg",
        description: "Manufacturers all over the world cannot do wihtout finding a way to roll"
    }
]
const cardBodies = document.querySelectorAll('.card-body')
cardBodies.forEach(function(cardBody, index){
    cardBody.innerHTML = `<img src="${services[index].image}" class="card-img" alt="">
 <p class="card-text">${services[index].description}... <a href="">Read More</a></p>`
});


const dataTableaRows = document.querySelectorAll('#data-table tbody tr');
dataTableaRows[2].remove();

const dataTableBody = document.querySelector('#data-table > tbody');
const newRow = document.createElement('tr')
newRow.innerHTML = `
<th scope="row">4</th>
<td>nEW DATA</td>
<td>Another data</td>
<td>Extra Data</td>
`
dataTableBody.appendChild(newRow);

//textContent
// innerHtml
// remove()
// append (appendChild)
// prepend (prependChild)

// document.querySelector(".navbar").style.backgroundColor='blue'