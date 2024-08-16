let pets = []; //pets array

//the constructor
function pet(name,age,gender,breed){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
}

function isValid(pet){
    let validation = true;
    let inputName = document.getElementById('txtName');
    let inputAge = document.getElementById('txtAge');

    inputName.classList.remove('error');
    inputAge.classList.remove('error');

    if(pet.name==""){
        validation=false;
        inputName.classList.add('error');
    }
//validate age
    if(pet.age==""){
        validation=false;
        inputAge.classList.add("error");
    }
    return validation;
}
function displayNotification(msg, notificationType) {
    let DIV = $("#notifications")
    DIV.removeClass("hide error success")
    DIV.addClass(notificationType).text(msg);
}

function register(){
    let inputName = document.getElementById('txtName').value;
    let inputAge = document.getElementById('txtAge').value;
    let inputGender = document.getElementById('txtGender').value;
    let inputBreed = document.getElementById('txtBreed').value;

    let newPet = new pet(inputName,inputAge,inputGender,inputBreed);
    if(isValid(newPet)==true){
        pets.push(newPet);
        displayRow();
     }
     displayNotification("Successful registration", "success");
}

function deletePet(id){
    console.log('Deleting' + id);
    pets.splice(id,1);
    document.getElementById(id).remove();// remove from html
    displayRow();//refresh the display
}


function init(){
    let pet1 = new pet('Scooby',10,'Male','Husky');//my first obj
    let pet2 = new pet('Scrappy',9,'Male','Mixed');
    pets.push(pet1,pet2)
    displayRow();
}


window.onload=init;//wait to render the html

// Function to display a pet in the table
//function displayRow(pet) {
//    let tableBody = document.getElementById('petsTable').getElementsByTagName('tbody')[0];
//    let newRow = tableBody.insertRow();

//    let cell1 = newRow.insertCell(0);
//    let cell2 = newRow.insertCell(1);
//    let cell3 = newRow.insertCell(2);
//    let cell4 = newRow.insertCell(3);

//    cell1.textContent = pet.name;
//    cell2.textContent = pet.age;
//    cell3.textContent = pet.gender;
//    cell4.textContent = pet.breed;
//}

