const navStyles = getComputedStyle(document.querySelector(".navbar"))
const navBg = navStyles.backgroundColor
console.log(navBg);

const btnStyles = getComputedStyle(document.querySelector(".btn-primary"))
const btnBg = btnStyles.backgroundColor
console.log(btnBg);

const tableHeading = document.querySelector("h2")
tableHeading.style.color = 'blue';
tableHeading.style.fontsize = '50px'

const contactButton = document.querySelector(".contact")
contactButton.style.backgroundColor = 'red';
contactButton.style.color = 'white';
contactButton.style.padding = '10px';
contactButton.style.borderRadius = '8px';


const serviceText = document.querySelector(".services")
serviceText.style.color = 'red';
serviceText.style.fontsize = '50px'




// change contact us to a button and our services to the same color of the
// contact us button created using dom manipulation 

/*textContext
remove()
innerhtml
append (appendChild)
prepend (appendChild)

textContext:for styling text on the html using dom....it does not deal with html content
innerhtml: it deals with html content and text content
*/
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
        image: "image/horse.jpg",
        description: "It is magic to behold the wonders of the universe"
    },
    {
        image: "image/lanvier.jpg",
        description: "Seasons are given for a reason and spring is not left out"
    },
    {
        image: "image/hen.jpg",
        description: "Manufacturers all over the world cannot do without finding a way to roll"
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
console.log(dataTableBody)

dataTableBody.appendChild(`<tr>
<th scope="row">4</th>
<td>nEW DATA</td>
<td>Another data</td>
<td>Extra Data</td>
</tr>`);

