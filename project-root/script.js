
let productVendor = document.getElementById("vendor");
let productTitle = document.getElementById("title");
let productPrice = document.getElementById("price");
let productComparePrice = document.getElementById("comparePrice");

// accessing different color tags

let colorOne = document.getElementById("colorOne");
let colorTwo = document.getElementById("colorTwo");
let colorThree = document.getElementById("colorThree");
let colorFour = document.getElementById("colorFour");

// accessing different size radio buttons

let sizeOne = document.getElementById("sizeOne");
let sizeTwo = document.getElementById("sizeTwo");
let sizeThree = document.getElementById("sizeThree");
let sizeFour = document.getElementById("sizeFour");
let sizeFive = document.getElementById("sizeFive");

// container for displaying count 

let digit = document.getElementById("num");

// accessing container for displaying output after clicking add to cart button

let output = document.getElementById("output");

// add to cart button container

let btn = document.getElementById("btn");


let options = {
    method: "GET"
};
fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json", options)
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        // accessing product from fetched link 

        let product = data.product;

        let colorPicker = product.options[0];
        let sizePicker = product.options[1];

        // assigning vendor name as text content to appropriate tag

        productVendor.textContent = product.vendor;

        // assigning title  as text content to appropriate tag

        productTitle.textContent = product.title;

        // assigning price  as text content to appropriate tag

        productPrice.textContent = product.price;

        // assigning compared price  as text content to appropriate tag

        productComparePrice.textContent = product.compare_at_price;

        // attatching color values fetched from server to HTML tags

        colorOne.style.backgroundColor = colorPicker.values[0].Yellow;
        colorTwo.style.backgroundColor = colorPicker.values[1].Green;
        colorThree.style.backgroundColor = colorPicker.values[2].Blue;
        colorFour.style.backgroundColor = colorPicker.values[3].Pink;

        //assigning fetched names of different sizes  to different tags

    
        sizeOne.textContent = sizePicker.values[0];
        sizeTwo.textContent = sizePicker.values[1];
        sizeThree.textContent = sizePicker.values[2];
        sizeFour.textContent = sizePicker.values[3];
        sizeFive.textContent = sizePicker.values[4];

    });

// function for incrementing count on clicking + button

function onIncrement() {

    let newDigit = parseInt(digit.textContent) + 1;

    digit.textContent = newDigit;


}

// function for decrementing count on clicking - button

function onDecrement() {
    if (parseInt(digit.textContent) > 0) {
        let newDigit = parseInt(digit.textContent) - 1;

        digit.textContent = newDigit;
    }

}

const radioButtons = document.querySelectorAll('input[name="size"]');

// event listener for delivering output according to options selected

btn.addEventListener("click", () => {
    let selectedSize;
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedSize = radioButton.value;
                break;
            }
        }
            //  showing the output according to selected options
        output.textContent = selectedSize ? `${selectedSize} sized ${digit.textContent} Dress added to Cart`   : `You haven't selected any size`;
});