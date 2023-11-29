// script.js
$(document).ready(function () {
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        var formData = $(this).serialize();
        console.log(formData);

        $.ajax({
            url: 'https://www.mockapi.com/your-api-endpoint',
            method: 'POST',
            data: formData,
            success: function (response) {
                console.log(response);
                alert('Message sent successfully');
            },
            error: function (error) {
                console.log(error);
                alert('Message could not be sent');
            },
        });
    });
});

document.getElementById("myForm").addEventListener("submit", function(event){
 event.preventDefault();

 let formData = new FormData(event.target);

 for(let pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]); 
 }
});

document.getElementById("myForm").addEventListener("submit", function(event){
 event.preventDefault();

 let formData = new FormData(event.target);

 fetch('file:///Users/himshikhachauhan/Documents/Lucky/Main.html#portfolio', {
    method: 'POST',
    body: formData
 })
 .then(response => response.json())
 .then(data => console.log('Success:', data))
 .catch((error) => console.error('Error:', error));
});




function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";

}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  console.log(n, 'plusSlides')
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  console.log(n, 'current slides')
}

function showSlides(n) {
  console.log(n, 'showSlides')
  var slides = document.getElementsByClassName("gallery-item2");
  console.log(slides)
}

