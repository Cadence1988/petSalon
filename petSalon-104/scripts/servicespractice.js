// constructor 
function Service(title,price){
    this.title=title;
    this.price=price;
}
//use jquery
function register(){
    let title = $("#txtTitle").val();
    let price = $('#txtPrice').val();

    let service = new Service(title,price);
    save(service);
    $('input').serviceval('');//clear the inputs
}

function init(){
    //hook events
    $('#btnRegister').on();
}

window.onload=init;

/////////////////////
function Service(description, price) {
    this.description = description;
    this.price = price;
}
///////////////////////
$(document).ready(function() {
    $('#serviceForm').on('submit', function(event) {
        event.preventDefault();
        var description = $('#description').val();
        var price = $('#price').val();
        
        if (description === '' || price === '') {
            $('#notification').text('Please fill out all fields.').show();
        } else {
            $('#notification').text('Service registered successfully!').show();
            $(this).trigger('reset'); // Clear form fields
        }
    });
});
